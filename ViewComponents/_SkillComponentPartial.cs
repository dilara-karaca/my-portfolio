using DAL.Entities;
using Microsoft.AspNetCore.Mvc;
namespace portfolyom.ViewComponents
{
    public class _SkillComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            var values = new List<Skill>
            {
                new Skill { Title = "Flutter (Dart)", Value = 85 },
                new Skill { Title = "Python", Value = 80 },
                new Skill { Title = "HTML / CSS / JS", Value = 75 },
                new Skill { Title = "C / C++", Value = 70 },
                new Skill { Title = "Java", Value = 60 },
                new Skill { Title = "MySQL / Firebase", Value = 60 }
            };

            return View(values);
        }
    }
}