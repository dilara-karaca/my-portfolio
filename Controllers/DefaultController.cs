using Microsoft.AspNetCore.Mvc;

namespace portfolyom.Controllers
{
    public class DefaultController : Controller
    {
        private readonly IWebHostEnvironment _environment;

        public DefaultController(IWebHostEnvironment environment)
        {
            _environment = environment;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult DownloadCv()
        {
            var fileName = "Zeynep Dilara Karaca.pdf";
            var filePath = Path.Combine(_environment.WebRootPath, "files", fileName);

            if (!System.IO.File.Exists(filePath))
            {
                return NotFound();
            }

            return PhysicalFile(filePath, "application/pdf", fileName);
        }
    }
}