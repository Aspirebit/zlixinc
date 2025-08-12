import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().regex(/^\d{10}$/, "Enter a 10-digit phone number"),
  company: z.string().min(2, "Enter your company name"),
  website: z.string().url().optional().or(z.literal("")).optional(),
  marketplace: z.enum(["amazon", "walmart", "both"], { required_error: "Select a marketplace" }),
  monthlyRevenue: z.string().min(1, "Monthly revenue is required"),
  catalogSize: z.string().min(1, "Catalog size is required"),
  country: z.string().min(2, "Country is required"),
  address: z.string().min(5, "Address is required"),
  message: z.string().min(10, "Tell us a bit more about your goals")
});

type LeadFormValues = z.infer<typeof schema>;

const LeadForm = () => {
  const { toast } = useToast();
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      marketplace: undefined as unknown as "amazon" | "walmart" | "both",
      monthlyRevenue: "",
      catalogSize: "",
      country: "",
      address: "",
      message: "",
    },
  });

  const onSubmit = (values: LeadFormValues) => {
    const subject = `New Lead: ${values.company} (${values.marketplace})`;
    const lines = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Company: ${values.company}`,
      values.website ? `Website: ${values.website}` : undefined,
      `Marketplace: ${values.marketplace}`,
      `Monthly Revenue: ${values.monthlyRevenue}`,
      `Catalog Size: ${values.catalogSize}`,
      `Country: ${values.country}`,
      `Address: ${values.address}`,
      "",
      "Message:",
      values.message,
    ];
    const body = encodeURIComponent(lines.filter(Boolean).join("\r\n"));

    const mailto = `mailto:sales@zlixinc.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;
    toast({ title: "Opening your email client...", description: "Your details will be sent to sales@zlixinc.com" });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField name="name" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="email" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@company.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FormField name="phone" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="tel" inputMode="numeric" pattern="[0-9]*" maxLength={10} placeholder="10-digit phone (numbers only)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="company" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Your Company LLC" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FormField name="marketplace" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Marketplace</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select marketplace" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="amazon">Amazon</SelectItem>
                      <SelectItem value="walmart">Walmart</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="monthlyRevenue" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Monthly revenue</FormLabel>
                <FormControl>
                  <Input placeholder="$50k" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FormField name="address" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Street, City, State / Province, ZIP" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="country" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="United States" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField name="catalogSize" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Catalog size</FormLabel>
              <FormControl>
                <Input placeholder="e.g., 25 SKUs" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField name="message" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea rows={5} placeholder="Tell us about your goals, timelines, MAP policy, and any constraints" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="pt-2 flex justify-center">
            <Button type="submit" size="lg" className="px-8 py-6 text-base">Scale My Brand</Button>
          </div>
        </form>
      </Form>
      <p className="mt-2 text-xs text-muted-foreground text-center">Your email client will open to send this message to sales@zlixinc.com.</p>
    </div>
  );
};

export default LeadForm;
