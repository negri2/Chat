using Chat.API.Models;
using Chat.Data;
using Chat.Data.Entities;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chat.API.Services
{
    public class TalksService
    {
        MongoDbContext dbContext = null;
        

        public TalksService()
        {
            dbContext = new MongoDbContext();
        }

        public IEnumerable<Talk> GetAll()
        {
            return dbContext.Talks.Find(i => true).ToList();
        }

        public string PostTalk(Talk talk)
        {
            talk.Id = ObjectId.GenerateNewId().ToString();
            dbContext.Talks.InsertOne(talk);
            return talk.Id;
        }
    }
}
