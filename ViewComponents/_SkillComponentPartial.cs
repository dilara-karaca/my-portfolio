using DAL.Context;
using Microsoft.AspNetCore.Mvc;
namespace portfolyom.ViewComponents
{
    public class _SkillComponentPartial : ViewComponent
    {
        PortfolioContext _context = new PortfolioContext();
        public IViewComponentResult Invoke()
        {
            var values = _context.Skills.ToList();
            return View(values);
        }
    }
}