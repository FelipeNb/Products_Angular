using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace APIProducts.Models
{
  public class Product
  {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string id { get; set; }
    public string name { get; set; }
    public string img { get; set; }
    public string type { get; set; }
    public string price { get; set; }
    public string dateInserted { get; set; }
    public string dateUpdate { get; set; }
  }
}
