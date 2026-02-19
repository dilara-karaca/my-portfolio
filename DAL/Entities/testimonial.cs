namespace DAL.Entities
{
    public class Testimonial
    {
        public int TestimonialId { get; set; }
        public string Namesurname { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
    }
}