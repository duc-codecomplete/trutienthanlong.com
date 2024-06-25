namespace SkillXMLEditor
{
    partial class Form1
    {
        /// <summary>
        /// Обязательная переменная конструктора.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Освободить все используемые ресурсы.
        /// </summary>
        /// <param name="disposing">истинно, если управляемый ресурс должен быть удален; иначе ложно.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Код, автоматически созданный конструктором форм Windows

        /// <summary>
        /// Требуемый метод для поддержки конструктора — не изменяйте 
        /// содержимое этого метода с помощью редактора кода.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.xml = new System.Windows.Forms.TextBox();
            this.Read = new System.Windows.Forms.Button();
            this.Save = new System.Windows.Forms.Button();
            this.SkillsList = new System.Windows.Forms.ListBox();
            this.ListSelector = new System.Windows.Forms.ComboBox();
            this.SelectorSkillList = new System.Windows.Forms.ListBox();
            this.contextMenuStrip1 = new System.Windows.Forms.ContextMenuStrip(this.components);
            this.уровеньToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.уровеньToolStripMenuItem1 = new System.Windows.Forms.ToolStripMenuItem();
            this.все10УровеньToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.contextMenuStrip2 = new System.Windows.Forms.ContextMenuStrip(this.components);
            this.добавитьВыбранныеToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.удалитьВыбранныеToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.contextMenuStrip1.SuspendLayout();
            this.contextMenuStrip2.SuspendLayout();
            this.SuspendLayout();
            // 
            // xml
            // 
            this.xml.Location = new System.Drawing.Point(12, 12);
            this.xml.Name = "xml";
            this.xml.Size = new System.Drawing.Size(532, 20);
            this.xml.TabIndex = 0;
            // 
            // Read
            // 
            this.Read.Location = new System.Drawing.Point(550, 10);
            this.Read.Name = "Read";
            this.Read.Size = new System.Drawing.Size(58, 23);
            this.Read.TabIndex = 1;
            this.Read.Text = "Read";
            this.Read.UseVisualStyleBackColor = true;
            this.Read.Click += new System.EventHandler(this.Read_Click);
            // 
            // Save
            // 
            this.Save.Location = new System.Drawing.Point(614, 10);
            this.Save.Name = "Save";
            this.Save.Size = new System.Drawing.Size(58, 23);
            this.Save.TabIndex = 2;
            this.Save.Text = "Save";
            this.Save.UseVisualStyleBackColor = true;
            this.Save.Click += new System.EventHandler(this.Save_Click);
            // 
            // SkillsList
            // 
            this.SkillsList.ContextMenuStrip = this.contextMenuStrip1;
            this.SkillsList.FormattingEnabled = true;
            this.SkillsList.Location = new System.Drawing.Point(12, 38);
            this.SkillsList.Name = "SkillsList";
            this.SkillsList.SelectionMode = System.Windows.Forms.SelectionMode.MultiExtended;
            this.SkillsList.Size = new System.Drawing.Size(345, 407);
            this.SkillsList.TabIndex = 3;
            // 
            // ListSelector
            // 
            this.ListSelector.FormattingEnabled = true;
            this.ListSelector.Location = new System.Drawing.Point(363, 38);
            this.ListSelector.Name = "ListSelector";
            this.ListSelector.Size = new System.Drawing.Size(309, 21);
            this.ListSelector.TabIndex = 4;
            this.ListSelector.SelectedIndexChanged += new System.EventHandler(this.ListSelector_SelectedIndexChanged);
            // 
            // SelectorSkillList
            // 
            this.SelectorSkillList.ContextMenuStrip = this.contextMenuStrip2;
            this.SelectorSkillList.FormattingEnabled = true;
            this.SelectorSkillList.Location = new System.Drawing.Point(363, 65);
            this.SelectorSkillList.Name = "SelectorSkillList";
            this.SelectorSkillList.SelectionMode = System.Windows.Forms.SelectionMode.MultiExtended;
            this.SelectorSkillList.Size = new System.Drawing.Size(309, 381);
            this.SelectorSkillList.TabIndex = 5;
            // 
            // contextMenuStrip1
            // 
            this.contextMenuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.уровеньToolStripMenuItem,
            this.уровеньToolStripMenuItem1,
            this.все10УровеньToolStripMenuItem,
            this.удалитьВыбранныеToolStripMenuItem});
            this.contextMenuStrip1.Name = "contextMenuStrip1";
            this.contextMenuStrip1.Size = new System.Drawing.Size(186, 92);
            // 
            // уровеньToolStripMenuItem
            // 
            this.уровеньToolStripMenuItem.Name = "уровеньToolStripMenuItem";
            this.уровеньToolStripMenuItem.Size = new System.Drawing.Size(152, 22);
            this.уровеньToolStripMenuItem.Text = "+1 Лвл";
            this.уровеньToolStripMenuItem.Click += new System.EventHandler(this.уровеньToolStripMenuItem_Click);
            // 
            // уровеньToolStripMenuItem1
            // 
            this.уровеньToolStripMenuItem1.Name = "уровеньToolStripMenuItem1";
            this.уровеньToolStripMenuItem1.Size = new System.Drawing.Size(152, 22);
            this.уровеньToolStripMenuItem1.Text = "-1 Лвл";
            this.уровеньToolStripMenuItem1.Click += new System.EventHandler(this.уровеньToolStripMenuItem1_Click);
            // 
            // все10УровеньToolStripMenuItem
            // 
            this.все10УровеньToolStripMenuItem.Name = "все10УровеньToolStripMenuItem";
            this.все10УровеньToolStripMenuItem.Size = new System.Drawing.Size(152, 22);
            this.все10УровеньToolStripMenuItem.Text = "Все 10 лвл";
            this.все10УровеньToolStripMenuItem.Click += new System.EventHandler(this.все10УровеньToolStripMenuItem_Click);
            // 
            // contextMenuStrip2
            // 
            this.contextMenuStrip2.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.добавитьВыбранныеToolStripMenuItem});
            this.contextMenuStrip2.Name = "contextMenuStrip2";
            this.contextMenuStrip2.Size = new System.Drawing.Size(194, 26);
            // 
            // добавитьВыбранныеToolStripMenuItem
            // 
            this.добавитьВыбранныеToolStripMenuItem.Name = "добавитьВыбранныеToolStripMenuItem";
            this.добавитьВыбранныеToolStripMenuItem.Size = new System.Drawing.Size(193, 22);
            this.добавитьВыбранныеToolStripMenuItem.Text = "Добавить выбранные";
            this.добавитьВыбранныеToolStripMenuItem.Click += new System.EventHandler(this.добавитьВыбранныеToolStripMenuItem_Click);
            // 
            // удалитьВыбранныеToolStripMenuItem
            // 
            this.удалитьВыбранныеToolStripMenuItem.Name = "удалитьВыбранныеToolStripMenuItem";
            this.удалитьВыбранныеToolStripMenuItem.Size = new System.Drawing.Size(185, 22);
            this.удалитьВыбранныеToolStripMenuItem.Text = "Удалить выбранные";
            this.удалитьВыбранныеToolStripMenuItem.Click += new System.EventHandler(this.удалитьВыбранныеToolStripMenuItem_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(684, 461);
            this.Controls.Add(this.SelectorSkillList);
            this.Controls.Add(this.ListSelector);
            this.Controls.Add(this.SkillsList);
            this.Controls.Add(this.Save);
            this.Controls.Add(this.Read);
            this.Controls.Add(this.xml);
            this.Name = "Form1";
            this.Text = "SkillXMLEditor by Kn1fe-Zone.Ru";
            this.contextMenuStrip1.ResumeLayout(false);
            this.contextMenuStrip2.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox xml;
        private System.Windows.Forms.Button Read;
        private System.Windows.Forms.Button Save;
        private System.Windows.Forms.ListBox SkillsList;
        private System.Windows.Forms.ComboBox ListSelector;
        private System.Windows.Forms.ListBox SelectorSkillList;
        private System.Windows.Forms.ContextMenuStrip contextMenuStrip1;
        private System.Windows.Forms.ToolStripMenuItem уровеньToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem уровеньToolStripMenuItem1;
        private System.Windows.Forms.ToolStripMenuItem все10УровеньToolStripMenuItem;
        private System.Windows.Forms.ContextMenuStrip contextMenuStrip2;
        private System.Windows.Forms.ToolStripMenuItem добавитьВыбранныеToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem удалитьВыбранныеToolStripMenuItem;
    }
}

