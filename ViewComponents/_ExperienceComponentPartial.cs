using DAL.Context;
using Microsoft.AspNetCore.Mvc;
namespace portfolyom.ViewComponents
{
    public class _ExperienceComponentPartial : ViewComponent
    {
        private readonly PortfolioContext _context;

        public _ExperienceComponentPartial(PortfolioContext context)
        {
            _context = context;
        }

        public IViewComponentResult Invoke()
        {
            var values = new List<DAL.Entities.Experience>();
            try
            {
                values = _context.Experiences.ToList();
            }
            catch
            {
                // Keep the page alive in production if DB is temporarily unavailable.
            }

            return View(values);
        }
    }
}