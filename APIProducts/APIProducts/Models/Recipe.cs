using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIProducts.Models
{
  public class Recipe
  {
    public string name { get; set; }
    public string img { get; set; }
    public string[] howToPrepare { get; set; }
    public Ingredient[] ingredients { get; set; }
    public int kcal { get; set; }
    public int portion { get; set; }
  }
}
