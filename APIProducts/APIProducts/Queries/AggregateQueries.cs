using APIProducts.Models;
using APIProducts.Services;

namespace APIProducts.Queries
{
  public class AggregateQueriesProduct : UserService
  {
    public AggregateQueriesProduct()
    {
      
    }
    public Product GetProducts { get; set; }
  }
} 
