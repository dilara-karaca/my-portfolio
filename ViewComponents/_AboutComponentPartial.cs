using Microsoft.AspNetCore.Mvc;
using DAL.Context;
using Microsoft.EntityFrameworkCore;


namespace portfolyom.ViewComponents
{
    public class _AboutComponentPartial : ViewComponent
    {
        private readonly PortfolioContext _context;

        public _AboutComponentPartial(PortfolioContext context)
        {
            _context = context;
        }

        public IViewComponentResult Invoke()
        {
            try
            {
                ViewBag.aboutTitle = _context.Abouts.Select(x => x.Title).FirstOrDefault();
                ViewBag.aboutSubDescription = _context.Abouts.Select(x => x.SubDescription).FirstOrDefault();
                ViewBag.aboutDetail = _context.Abouts.Select(x => x.Details).FirstOrDefault();
            }
            catch
            {
                ViewBag.aboutTitle = string.Empty;
                ViewBag.aboutSubDescription = string.Empty;
                ViewBag.aboutDetail = string.Empty;
            }

            return View();
        }
    }
}