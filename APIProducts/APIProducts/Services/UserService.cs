using APIProducts.Models;
using APIProducts.Queries;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace APIProducts.Services
{
  public class UserService
  {
    private readonly IMongoCollection<User> _user;
    private ProductService _productService;

    public UserService(IDatabaseSettings settings)
    {
      var client = new MongoClient(settings.ConnectionString);
      var database = client.GetDatabase(settings.DatabaseName);
      _user = database.GetCollection<User>(settings.UserCollectionName);
    }
    public List<User> Get() =>
       _user.Find("{}").ToList();

    public List<Shop> GetShopFromUser(string id)
    {
      _user.Find<User>(user => user.id == id);
      return null;
    }

    public User Get(string id) =>
        _user.Find<User>(user => user.id == id).FirstOrDefault();

    public User GetCredentials(string email, string password)
    {
      var filter = " { $and: {email: " + email + ", password: " + password + "} } ";
      var credentials = _user.Find<User>(filter).FirstOrDefault();
      if (credentials != null)
        return credentials;
      else
        return null;
    }

    public User Create(User user)
    {
      _user.InsertOne(user);
      var aggregateResult = _user.Aggregate()
        .Match(p => p.id == user.id)
        .Lookup(
            foreignCollection: ,
            localField: l => l.shops.id,
            foreignField: f => f.id,
            @as: (AggregateQueriesProduct a) => a.GetProducts
         )
        .toList();
      return user;
    }

    public void Update(string id, User userIn)
    {
      _user.ReplaceOne(f => f.id == id, userIn);
    }

    public void AddShopToUser(string id, Shop shop)
    {
      var i = Builders<User>.Update.Push(x => x.shops, shop);
      _user.UpdateOne(user => user.id == id, i);
    }

    public void Remove(User userIn) =>
        _user.DeleteOne(user => user.id == userIn.id);

    public void Remove(string id) =>
        _user.DeleteOne(user => user.id == id);
  }
}
