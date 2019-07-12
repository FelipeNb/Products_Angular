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
  [Route("api/user")]
  [ApiController]
  public class UserController : ControllerBase
  {
    private readonly UserService _userService;
    public UserController(UserService userService)
    {
      _userService = userService;
    }

    // GET: api/Product
    [HttpGet]
    public ActionResult<List<User>> Get()
    {
      var list = _userService.Get();
      return list;
    }

    // GET: api/user/5
    [HttpGet("{id}", Name = "GetUser")]
    public User Get(string id)
    {
      return _userService.Get(id);
    }

    //// POST: api/user
    //[HttpGet("{email}", Name = "Email")]
    //public ActionResult<User> GetCredentials(string email, string password)
    //{
    //  var user = _userService.GetCredentials(email, password);
    //  if (user == null)
    //  {
    //    return NotFound();
    //  }
    //  return user;
    //}

    // POST: api/user
    [HttpPost]
    public ActionResult<User> Post(User newUser)
    {
      return _userService.Create(newUser);
    }

    [HttpPost("{id}", Name = "AddShop")]
    public ActionResult AddShop(string id, Shop shop)
    {
      _userService.AddShopToUser(id, shop);
      return Ok();
    }

    // PUT: api/user/5
    [HttpPut]
    public void Put(User updatedUser)
    {
      _userService.Update(updatedUser.id, updatedUser);
    }

    // DELETE: api/user/5
    [HttpDelete("{id}")]
    public void Delete(string id)
    {
      _userService.Remove(id);
    }
  }
}
