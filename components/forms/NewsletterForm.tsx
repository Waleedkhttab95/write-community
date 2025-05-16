'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'الاسم الأول مطلوب' }),
  lastName: z.string().min(2, { message: 'الاسم الأخير مطلوب' }),
  email: z.string().email({ message: 'يرجى إدخال بريد إلكتروني صحيح' }),
});

type FormValues = z.infer<typeof formSchema>;

interface NewsletterFormProps {
  inFooter?: boolean;
}

export default function NewsletterForm({ inFooter = false }: NewsletterFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send this data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "تم التسجيل بنجاح",
        description: "سيتم إرسال النشرة البريدية إلى بريدك الإلكتروني",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "لم نتمكن من تسجيلك في النشرة البريدية، يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-4 ${inFooter ? 'text-left' : ''}`}>
        {!inFooter && <h3 className="text-2xl font-bold mb-4">اشترك في نشرتنا البريدية</h3>}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                {!inFooter && <FormLabel>الاسم الأول</FormLabel>}
                <FormControl>
                  <Input placeholder="الاسم الأول" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                {!inFooter && <FormLabel>الاسم الأخير</FormLabel>}
                <FormControl>
                  <Input placeholder="الاسم الأخير" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              {!inFooter && <FormLabel>البريد الإلكتروني</FormLabel>}
              <FormControl>
                <Input placeholder="البريد الإلكتروني" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className={`${inFooter ? 'w-full' : 'px-8'} bg-gold hover:bg-gold-dark text-white`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'جارِ التسجيل...' : 'اشترك الآن'}
        </Button>
      </form>
    </Form>
  );
}