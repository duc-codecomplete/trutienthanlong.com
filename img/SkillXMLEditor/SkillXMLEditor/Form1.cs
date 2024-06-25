using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Windows.Forms;

namespace SkillXMLEditor
{
    public partial class Form1 : Form
    {
        List<Skill> skills = new List<Skill>();
        List<SkillText> skill_text = new List<SkillText>();
        Dictionary<int, string> skill_name = new Dictionary<int, string>();
        List<SkillText> current_skills = new List<SkillText>();

        public Form1()
        {
            InitializeComponent();
            ListSelector.DropDownStyle = ComboBoxStyle.DropDownList;
            LoadData(0);
        }

        private void Read_Click(object sender, EventArgs e)
        {
            if (xml.Text.Length >= 8)
            {
                skills = new SkillXML().Read(xml.Text);
                LoadData(2);
            }
        }

        private void Save_Click(object sender, EventArgs e)
        {
            xml.Text = new SkillXML().Save(skills);
            Clipboard.SetText(xml.Text);
            MessageBox.Show("Сохранено и записано в буфер обмена!");
        }

        private void ListSelector_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (ListSelector.SelectedIndex > -1) LoadData(1);
        }

        void LoadData(byte t)
        {
            switch(t)
            {
                case 0:
                    string[] Files = Directory.GetFiles(Application.StartupPath, "*.txt", SearchOption.AllDirectories);
                    skill_text.Clear();
                    skill_name.Clear();
                    ListSelector.Items.Clear();
                    foreach (string file in Files)
                    {
                        string name = Path.GetFileNameWithoutExtension(file);
                        ListSelector.Items.Add(name);
                        StreamReader sr = new StreamReader(file);
                        while (!sr.EndOfStream)
                        {
                            SkillText s = new SkillText();
                            s.text_name = name;
                            string[] data = sr.ReadLine().Split(';');
                            s.id = Convert.ToInt32(data[0]);
                            s.name = data[1];
                            skill_text.Add(s);
                            if (!skill_name.ContainsKey(s.id))
                            {
                                skill_name.Add(s.id, s.name);
                            }
                        }
                        sr.Close();
                    }
                    break;
                case 1:
                    SelectorSkillList.Items.Clear();
                    SelectorSkillList.BeginUpdate();
                    current_skills.Clear();
                    current_skills = skill_text.Where(x => x.text_name.Contains(ListSelector.Text)).ToList();
                    for (int i = 0; i < current_skills.Count; ++i)
                    {
                        SelectorSkillList.Items.Add(string.Format("[{0}] {1}", current_skills[i].id, current_skills[i].name));
                    }
                    SelectorSkillList.EndUpdate();
                    break;
                case 2:
                    SkillsList.Items.Clear();
                    SkillsList.BeginUpdate();
                    for (int i = 0; i < skills.Count; ++i)
                    {
                        string name = skill_name.ContainsKey(skills[i].id) ? skill_name[skills[i].id] : "Неизвестно";
                        SkillsList.Items.Add(string.Format("[{0}] {1} [Уровень: {2}]", skills[i].id, name, skills[i].lvl));
                    }
                    SkillsList.EndUpdate();
                    break;
            }
        }

        private void уровеньToolStripMenuItem_Click(object sender, EventArgs e)
        {
            foreach (int i in SkillsList.SelectedIndices)
            {
                skills[i].lvl += skills[i].lvl < 10 ? 1 : 0;
            }
            LoadData(2);
        }

        private void уровеньToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            foreach (int i in SkillsList.SelectedIndices)
            {
                skills[i].lvl -= skills[i].lvl > 1 ? 1 : 0;
            }
            LoadData(2);
        }

        private void все10УровеньToolStripMenuItem_Click(object sender, EventArgs e)
        {
            for (int i = 0; i < skills.Count; ++i)
            {
                skills[i].lvl = 10;
            }
            LoadData(2);
        }

        private void добавитьВыбранныеToolStripMenuItem_Click(object sender, EventArgs e)
        {
            foreach (int i in SelectorSkillList.SelectedIndices)
            {
                skills.Add(new Skill(current_skills[i].id, 1));
            }
            LoadData(2);
        }

        private void удалитьВыбранныеToolStripMenuItem_Click(object sender, EventArgs e)
        {
            List<int> deleted = new List<int>();
            foreach (int i in SkillsList.SelectedIndices) deleted.Add(i);
            deleted.Reverse();
            foreach (int i in deleted) skills.RemoveAt(i);
            LoadData(2);
        }
    }

    public class Skill
    {
        public int id { get; set; }
        public int lvl { get; set; }
        public Skill() { }
        public Skill(int id, int lvl)
        {
            this.id = id;
            this.lvl = lvl;
        }
    }

    public class SkillText
    {
        public string text_name { get; set; }
        public int id { get; set; }
        public string name { get; set; }
    }

    public class SkillXML
    {
        public List<Skill> Read(string input)
        {
            List<Skill> skills = new List<Skill>();
            int pos = 0;
            int count = ConvertToInt(input.Substring(0, 8));
            for (int i = 0; i < count; ++i)
            {
                Skill s = new Skill();
                s.id = ConvertToInt(input.Substring(pos += 8, 8));
                pos += 8;
                s.lvl = ConvertToInt(input.Substring(pos += 8, 8));
                skills.Add(s);
            }
            return skills;
        }

        public string Save(List<Skill> skills)
        {
            string output = "";
            output += ConvertToHex(skills.Count);
            for (int i = 0; i < skills.Count; ++i)
            {
                output += ConvertToHex(skills[i].id);
                output += "00000000";
                output += ConvertToHex(skills[i].lvl);
            }
            return output.ToLower();
        }

        public int ConvertToInt(string input)
        {
            string a = input.Substring(0, 2);
            string b = input.Substring(2, 2);
            string c = input.Substring(4, 2);
            string d = input.Substring(6, 2);
            string hex = d + c + b + a;
            return int.Parse(hex, System.Globalization.NumberStyles.HexNumber);
        }

        public string ConvertToHex(int input)
        {
            string hex = input.ToString("X8");
            string a = hex.Substring(0, 2);
            string b = hex.Substring(2, 2);
            string c = hex.Substring(4, 2);
            string d = hex.Substring(6, 2);
            return d + c + b + a;
        }
    }
}
