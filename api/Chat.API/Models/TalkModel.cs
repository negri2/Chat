using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chat.API.Models
{
    public class TalkModel
    {
        public string User { get; set; }

        public DateTime Date { get; set; }

        public string Message { get; set; }
    }
}
