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
    public ActionResult<Product> Get(string id)
    {
      return _productService.Get(id);
    }

    // POST: api/Product
    [HttpPost]
    public ActionResult<Product> Create(Product product)
    {
      return _productService.Create(product);
    }


    // PUT: api/Product/5
    [HttpPut]
    public void Put(Product updatedProduct)
    {
      _productService.Update(updatedProduct.id.ToString(), updatedProduct);
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public void Delete(string id)
    {
      _productService.Remove(id);
    }
  }
}
