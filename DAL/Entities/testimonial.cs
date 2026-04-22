namespace DAL.Entities
{
    public class Testimonial
    {
        public int TestimonialId { get; set; }
        public string Namesurname { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
    }
}