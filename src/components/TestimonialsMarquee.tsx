import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  { name: "Alex R.", role: "Head of Ecommerce", rating: 5, photo: "https://i.pravatar.cc/80?img=11", text: "Disciplined FBA + retail-aware ads. Revenue compounding without channel conflict." },
  { name: "Priya S.", role: "Marketplace Manager", rating: 5, photo: "https://i.pravatar.cc/80?img=12", text: "Clean contribution, MAP discipline, and creative that converts." },
  { name: "Daniel K.", role: "Director of Sales", rating: 5, photo: "https://i.pravatar.cc/80?img=13", text: "Dependable POs and clear reporting. Zero drama, just results." },
  { name: "Mia L.", role: "Brand Lead", rating: 5, photo: "https://i.pravatar.cc/80?img=14", text: "They stabilized our buy box and scaled with profitable ads." },
  { name: "Omar H.", role: "GM, Retail", rating: 4.5, photo: "https://i.pravatar.cc/80?img=15", text: "Fast inventory turns with FBA and smart seasonal planning." },
  { name: "Sophia T.", role: "COO", rating: 4.8, photo: "https://i.pravatar.cc/80?img=16", text: "Compliance-first mindset and great operational rigor." },
  { name: "Ethan P.", role: "VP, Growth", rating: 5, photo: "https://i.pravatar.cc/80?img=17", text: "Affiliate pushes + Amazon Ads created predictable ranking lifts." },
  { name: "Nora C.", role: "Category Manager", rating: 4.7, photo: "https://i.pravatar.cc/80?img=18", text: "Great partner—organized, transparent, and fast to act." },
  { name: "Jacob W.", role: "Owner", rating: 5, photo: "https://i.pravatar.cc/80?img=19", text: "Listing rebuild + A+ content gave us real conversion gains." },
  { name: "Lena M.", role: "Marketing Director", rating: 5, photo: "https://i.pravatar.cc/80?img=20", text: "Blended media strategy that actually respects retail inputs." },
];

type Review = typeof reviews[number];

const ReviewCard = ({ name, role, rating, text, photo }: Review) => (
  <article className="shrink-0 w-80 md:w-96 rounded-lg border p-5 mx-2 bg-background/80">
    <div className="flex gap-1 text-[hsl(var(--primary))]" aria-label={`${rating} star rating`}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4" fill="currentColor" />
      ))}
    </div>
    <p className="mt-3 text-sm text-foreground/90">{text}</p>
    <div className="mt-4 flex items-center gap-3">
      <Avatar className="h-8 w-8">
        <AvatarImage src={photo} alt={`${name} headshot`} />
        <AvatarFallback>{name.split(" ").map((n) => n[0]).join("").slice(0,2)}</AvatarFallback>
      </Avatar>
      <div className="text-sm">
        <div className="font-medium">{name}</div>
        <div className="text-muted-foreground text-xs">{role}</div>
      </div>
    </div>
  </article>
);

const TestimonialsMarquee = () => {
  const loop = [...reviews, ...reviews];
  return (
    <div className="marquee">
      <div className="marquee-inner">
        {loop.map((r, idx) => (
          <ReviewCard key={idx + r.name} {...r} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsMarquee;
