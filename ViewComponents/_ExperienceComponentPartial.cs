using DAL.Context;
using Microsoft.AspNetCore.Mvc;
namespace portfolyom.ViewComponents
{
    public class _ExperienceComponentPartial : ViewComponent
    {
        PortfolioContext _context = new PortfolioContext();

        public IViewComponentResult Invoke()
        {
            var values = _context.Experiences.ToList();
            return View(values);
        }
    }
}