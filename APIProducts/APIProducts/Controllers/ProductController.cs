using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIProducts.Models;
using APIProducts.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIProducts.Controllers
{
  [Route("api/products")]
  [ApiController]
  public class ProductController : ControllerBase
  {

    private readonly ProductService _productService;

    public ProductController(ProductService service)
    {
      _productService = service;
    }
    // GET: api/Product
    [HttpGet]
    public ActionResult<List<Product>> Get()
    {
      var listProd = _productService.Get();
      return listProd;
    }

    // GET: api/Product/5
    [HttpGet("{id}", Name = "Get")]
    public string Get(int id)
    {
      return "value";
    }

    // POST: api/Product
    [HttpPost]
    public void Create(Product product)
    {
      _productService.Create(product);
    }


    // PUT: api/Product/5
    [HttpPut("{id}")]
    public void Put(string id, Product updatedProduct)
    {
      _productService.Update(id, updatedProduct);
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public void Delete(string id)
    {
      _productService.Remove(id);
    }
  }
}
