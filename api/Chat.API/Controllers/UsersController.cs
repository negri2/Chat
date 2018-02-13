using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Chat.Data.Entities;

namespace Chat.Controllers
{
    [Produces("application/json")]
    [Route("api/Users")]
    public class UsersController : Controller
    {
        public UsersController()
        {

        }

        [HttpGet]
        public string GetUsers()
        {
            return "testeee";
        }

        [HttpPost]
        public IActionResult PostUser([FromBody]User user)
        {
            return Ok();
        }

        [HttpPut]
        public IActionResult PuttUser([FromBody]User user)
        {
            return Ok();
        }
    }
}