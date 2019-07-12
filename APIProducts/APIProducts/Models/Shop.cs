using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIProducts.Models
{
  public class Shop
  {
    public string amount { get; set; }
    [BsonRepresentation(BsonType.ObjectId)]
    public string productId { get; set; }
  }
}
