namespace APIProducts.Models
{
  public class ProductsDatabaseSettings : IProductsDatabaseSettings
  {
    public string ProductCollectionName { get; set; }
    public string ConnectionString { get; set; }
    public string DatabaseName { get; set; }
  }

  public interface IProductsDatabaseSettings
  {
    string ProductCollectionName { get; set; }
    string ConnectionString { get; set; }
    string DatabaseName { get; set; }
  }
}
