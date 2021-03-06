﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Chat.Data.Entities
{
    public class Talk
    {
        public string Id { get; set; }

        public string User { get; set; }

        public DateTime Date { get; set; }

        public string Message { get; set; }
    }
}
