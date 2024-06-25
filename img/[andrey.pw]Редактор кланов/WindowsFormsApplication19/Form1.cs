using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Windows.Forms;

namespace WindowsFormsApplication19
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            button5.Enabled = false;
            textBox1.Enabled = false;
            textBox2.Enabled = false;
            textBox3.Enabled = false;
            textBox4.Enabled = false;
            textBox5.Enabled = false;
            textBox6.Enabled = false;
            textBox7.Enabled = false;
            textBox8.Enabled = false;
            textBox9.Enabled = false;
            textBox10.Enabled = false;
            textBox11.Enabled = false;
            textBox12.Enabled = false;
            textBox13.Enabled = false;
        }

        private void Form1_Load(object sender, EventArgs e)
        {
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (this.openFileDialog1.ShowDialog() == DialogResult.OK)
            {
                FileStream fileStream2 = new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Read);
                BinaryReader binaryReader2 = new BinaryReader(fileStream2); // 3 уровень клана
                binaryReader2.BaseStream.Seek(1041984, SeekOrigin.Begin);
                FileStream fileStream3 = new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Read);
                BinaryReader binaryReader3 = new BinaryReader(fileStream3); // 2 уровень клана
                binaryReader3.BaseStream.Seek(1041980, SeekOrigin.Begin);
                FileStream fileStream4 = new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Read);
                BinaryReader binaryReader4 = new BinaryReader(fileStream4); // 1 уровень клана
                binaryReader4.BaseStream.Seek(1041976, SeekOrigin.Begin);
                //
                FileStream fileStream5 = new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Read);
                BinaryReader binaryReader5 = new BinaryReader(fileStream5); // 1 уровень клана
                binaryReader5.BaseStream.Seek(1042016, SeekOrigin.Begin);
                FileStream fileStream6 = new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Read);
                BinaryReader binaryReader6 = new BinaryReader(fileStream6); // 1 уровень клана
                binaryReader6.BaseStream.Seek(1042020, SeekOrigin.Begin);
                FileStream fileStream7 = new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Read);
                BinaryReader binaryReader7 = new BinaryReader(fileStream7); // 1 уровень клана
                binaryReader7.BaseStream.Seek(1042024, SeekOrigin.Begin);
                //
                FileStream fileStream8= new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Read);
                BinaryReader binaryReader8 = new BinaryReader(fileStream8); // Мастеры
                binaryReader8.BaseStream.Seek(1041996, SeekOrigin.Begin);
                FileStream fileStream9 = new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Read);
                BinaryReader binaryReader9 = new BinaryReader(fileStream9); // Маршалы
                binaryReader9.BaseStream.Seek(1042000, SeekOrigin.Begin);
                FileStream fileStream10 = new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Read);
                BinaryReader binaryReader10 = new BinaryReader(fileStream10); // Майоры
                binaryReader10.BaseStream.Seek(1042004, SeekOrigin.Begin);
                FileStream fileStream11 = new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Read);
                BinaryReader binaryReader11 = new BinaryReader(fileStream11); // Капитаны
                binaryReader11.BaseStream.Seek(1042008, SeekOrigin.Begin);
                FileStream fileStream12 = new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Read);
                BinaryReader binaryReader12 = new BinaryReader(fileStream12); // Члены
                binaryReader12.BaseStream.Seek(1042012, SeekOrigin.Begin);
                //
                FileStream fileStream13 = new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Read);
                BinaryReader binaryReader13 = new BinaryReader(fileStream13); // Время тв
                binaryReader13.BaseStream.Seek(536154, SeekOrigin.Begin);
                //
                string fileName = this.openFileDialog1.FileName;
                this.textBox2.Text = fileName;
                //
                button5.Enabled = true;
                textBox1.Enabled = true;
                textBox3.Enabled = true;
                textBox4.Enabled = true;
                textBox5.Enabled = true;
                textBox6.Enabled = true;
                textBox7.Enabled = true;
                textBox8.Enabled = true;
                textBox9.Enabled = true;
                textBox10.Enabled = true;
                textBox11.Enabled = true;
                textBox12.Enabled = true;
                textBox13.Enabled = true;
                //
                textBox1.Text = binaryReader2.ReadInt32().ToString(); // 3 уровень клана
                textBox3.Text = binaryReader3.ReadInt32().ToString(); // 2 уровень клана
                textBox4.Text = binaryReader4.ReadInt32().ToString(); // 1 уровень клана
                //
                textBox5.Text = binaryReader5.ReadInt32().ToString(); // Макс число 1 уровень
                textBox6.Text = binaryReader6.ReadInt32().ToString(); // Макс число 2 уровень
                textBox7.Text = binaryReader7.ReadInt32().ToString(); // Макс число 3 уровень
                //
                textBox8.Text = binaryReader8.ReadInt32().ToString(); // Мастеров
                textBox9.Text = binaryReader9.ReadInt32().ToString(); // Маршалов
                textBox10.Text = binaryReader10.ReadInt32().ToString(); // Майоров
                textBox11.Text = binaryReader11.ReadInt32().ToString(); // Капитанов
                textBox12.Text = binaryReader12.ReadInt32().ToString(); // Членов
                //
                textBox13.Text = binaryReader13.ReadInt32().ToString(); // Батл время
                binaryReader2.Close();
                binaryReader3.Close();
                binaryReader4.Close();
                binaryReader5.Close();
                binaryReader6.Close();
                binaryReader7.Close();
                fileStream2.Close();
            }
        }

        private void button2_Click(object sender, EventArgs e) // 3 уровень
        {
        }

        private void button3_Click(object sender, EventArgs e)
        {

        }

        private void textBox3_TextChanged(object sender, EventArgs e)
        {

        }

        private void button3_Click_1(object sender, EventArgs e)
        {
        }

        private void textBox4_TextChanged(object sender, EventArgs e)
        {

        }

        private void button4_Click(object sender, EventArgs e)
        {
        }

        private void textBox5_TextChanged(object sender, EventArgs e)
        {

        }

        private void label6_Click(object sender, EventArgs e)
        {

        }

        private void label9_Click(object sender, EventArgs e)
        {

        }

        private void button5_Click(object sender, EventArgs e)
          {
              using (BinaryWriter writer1 = new BinaryWriter(new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Write))) // 3 уровень клана 
                {
                    writer1.BaseStream.Seek(1041984, SeekOrigin.Begin);
                    writer1.Write(System.Convert.ToInt32(textBox1.Text));
                }
              using (BinaryWriter writer2 = new BinaryWriter(new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Write))) // 2 уровень клана 
                {
                    writer2.BaseStream.Seek(1041980, SeekOrigin.Begin);
                    writer2.Write(System.Convert.ToInt32(textBox3.Text));
                }
              using (BinaryWriter writer3 = new BinaryWriter(new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Write))) // 1 уровень клана 
                {
                    writer3.BaseStream.Seek(1041976, SeekOrigin.Begin);
                    writer3.Write(System.Convert.ToInt32(textBox4.Text));
                }
            //
              using (BinaryWriter writer4 = new BinaryWriter(new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Write))) // Макс число 1 уровень
              {
                  writer4.BaseStream.Seek(1042016, SeekOrigin.Begin);
                  writer4.Write(System.Convert.ToInt32(textBox5.Text));
              }
              using (BinaryWriter writer5 = new BinaryWriter(new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Write))) // Макс число 2 уровень
              {
                  writer5.BaseStream.Seek(1042020, SeekOrigin.Begin);
                  writer5.Write(System.Convert.ToInt32(textBox6.Text));
              }
              using (BinaryWriter writer6 = new BinaryWriter(new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Write))) // Макс число 3 уровень
              {
                  writer6.BaseStream.Seek(1042024, SeekOrigin.Begin);
                  writer6.Write(System.Convert.ToInt32(textBox7.Text));
              }
            // Лимиты должностей
              using (BinaryWriter writer10 = new BinaryWriter(new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Write))) // Мастер
              {
                  writer10.BaseStream.Seek(1041996, SeekOrigin.Begin);
                  writer10.Write(System.Convert.ToInt32(textBox8.Text));
              }
              using (BinaryWriter writer11 = new BinaryWriter(new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Write))) // Маршал
              {
                  writer11.BaseStream.Seek(1042000, SeekOrigin.Begin);
                  writer11.Write(System.Convert.ToInt32(textBox9.Text));
              }
              using (BinaryWriter writer12 = new BinaryWriter(new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Write))) // Майор
              {
                  writer12.BaseStream.Seek(1042004, SeekOrigin.Begin);
                  writer12.Write(System.Convert.ToInt32(textBox10.Text));
              }
              using (BinaryWriter writer13 = new BinaryWriter(new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Write))) // Капитан
              {
                  writer13.BaseStream.Seek(1042008, SeekOrigin.Begin);
                  writer13.Write(System.Convert.ToInt32(textBox11.Text));
              }
              using (BinaryWriter writer14 = new BinaryWriter(new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Write))) // Член
              {
                  writer14.BaseStream.Seek(1042012, SeekOrigin.Begin);
                  writer14.Write(System.Convert.ToInt32(textBox12.Text));
              }
            //
              using (BinaryWriter writer15 = new BinaryWriter(new FileStream(this.openFileDialog1.FileName, FileMode.Open, FileAccess.Write))) // TW
              {
                  writer15.BaseStream.Seek(536154, SeekOrigin.Begin);
                  writer15.Write(System.Convert.ToInt32(textBox13.Text));
              }
                MessageBox.Show("Успешно изменено.");
          }

        private void label8_Click(object sender, EventArgs e)
        {

        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void label14_Click(object sender, EventArgs e)
        {

        }

        private void menuStrip1_ItemClicked(object sender, ToolStripItemClickedEventArgs e)
        {

        }

        private void информацияToolStripMenuItem_Click(object sender, EventArgs e)
        {
            MessageBox.Show("- Имя: Редактор gFactiond\n- Версия: [1.4.5]\n- Автор: Agree\n- Сайт: mmorpg-devs.ru\n- Благодарю: vampire (VAMPiRE)");
        }

        private void label16_Click(object sender, EventArgs e)
        {

        }

        private void textBox13_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
