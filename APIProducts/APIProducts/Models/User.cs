using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIProducts.Models
{
  public class User
  {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string id { get; set; }
    public string name { get; set; }
    [BsonRequired]
    public string email { get; set; }
    [BsonRequired]
    public string password { get; set; }
    public Shop[] shops { get; set; }
  }
}
