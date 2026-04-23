using DAL.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace portfolyom.ViewComponents
{
    public class _FeatureComponentPartial : ViewComponent
    {
        private readonly PortfolioContext _context;

        public _FeatureComponentPartial(PortfolioContext context)
        {
            _context = context;
        }

        public IViewComponentResult Invoke()
        {
            var values = new List<DAL.Entities.Feature>();
            try
            {
                values = _context.Features.ToList();
            }
            catch
            {
                // Keep the page alive in production if DB is temporarily unavailable.
            }

            return View(values);
        }
    }

}
