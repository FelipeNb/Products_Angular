using APIProducts.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace APIProducts.Services
{
  public class ProductService
  {
    private readonly IMongoCollection<Product> _products;

    public ProductService(IDatabaseSettings settings)
    {
      var client = new MongoClient(settings.ConnectionString);
      var database = client.GetDatabase(settings.DatabaseName);
      _products = database.GetCollection<Product>(settings.ProductCollectionName);
    }

    public List<Product> Get() =>
        _products.Find("{}").ToList();

    public Product Get(string id) =>
        _products.Find<Product>(product => product.id == id).FirstOrDefault();

    public Product Create(Product product)
    {
      _products.InsertOne(product);
      return product;
    }

    public void Update(string id, Product productIn)
    {
      _products.ReplaceOne(f => f.id == id, productIn);
    }

    public void Remove(Product productIn) =>
        _products.DeleteOne(product => product.id == productIn.id);

    public void Remove(string id) =>
        _products.DeleteOne(product => product.id == id);

    public Product GetProducts { get; set; }
  }
}
