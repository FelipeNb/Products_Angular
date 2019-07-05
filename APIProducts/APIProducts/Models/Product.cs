using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace APIProducts.Models
{
  public class Product
  {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public string Name { get; set; }
    public string Type { get; set; }
    public string Price { get; set; }
    public Recipe Recipe { get; set; }
    public string DateInserted { get; set; }
    public string DateUpdate { get; set; }
  }
}
