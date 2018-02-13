using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Chat.API.Services;
using Chat.Data.Entities;

namespace Chat.API.Controllers
{
    [Produces("application/json")]
    [Route("api/Talks")]
    public class TalksController : Controller
    {
        private TalksService _service;
        public TalksController()
        {
            this._service = new TalksService();
        }

        [HttpGet]
        public IActionResult GetTalks()
        {
            var result = this._service.GetAll();
            return Ok(result);
        }

        [HttpPost]
        public IActionResult PostTalk([FromBody]Talk talk)
        {
            this._service.PostTalk(talk);
            return Ok();
        }
    }
}