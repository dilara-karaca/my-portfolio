using Microsoft.AspNetCore.Mvc;

namespace portfolyom.ViewComponents
{
    public class _ExperienceComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            var values = new List<DAL.Entities.Experience>
            {
                new DAL.Entities.Experience
                {
                    Date = "Temmuz 2026 – Ağustos 2026",
                    Head = "IdeaSoft",
                    Title = "Yazılım Geliştirme Stajyeri",
                    Description = "Setup biriminde müşteri e-ticaret sitelerinin sayfa ve şablon yapısını HTML, CSS ve JavaScript ile özelleştirdim; ürün varyantı seçimine göre fiyat değişimini ve stokta olmayan varyant kombinasyonlarının devre dışı bırakılmasını JavaScript ile kodladım.\n\nXML/Excel ile toplu ürün verisi yönetimi ve veri doğrulama, Python (pandas) ile veri analizi yaptım; SEO düzenlemeleri ile test ve kalite kontrol süreçlerinde görev aldım."
                },
                new DAL.Entities.Experience
                {
                    Date = "Haziran 2025 – Haziran 2026",
                    Head = "İSTÜN Teknoloji Transfer Ofisi",
                    Title = "Uzun Dönem Stajyer",
                    Description = "Teknoloji Transfer Ofisi'nde yürüttüğüm staj kapsamında araştırma ve inovasyon süreçlerini aktif olarak deneyimliyorum. Ulusal ve bilimsel araştırma projelerinin başvuru ve planlama aşamalarını gözlemleyerek proje yönetimi süreçlerine dair pratik bilgi kazanıyorum.\n\nÜniversite-sanayi iş birliği projelerinde görev alarak fon başvurusu ve raporlama süreçlerine destek sağlıyor, kurumsal işleyiş ve ekip dinamikleri hakkında deneyim ediniyorum."
                }
            };

            return View(values);
        }
    }
}
