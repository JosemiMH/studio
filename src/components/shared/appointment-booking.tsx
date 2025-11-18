
"use client";

import React, { useState, useEffect } from 'react';
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useLanguage } from '@/contexts/language-context';
import { bookAppointment } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '../ui/textarea';
import { format } from 'date-fns';

const availableTimes = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

const AppointmentBooking = ({ trigger }: { trigger: React.ReactNode }) => {
  const { appointment, services } = useLanguage().translations;
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const AppointmentSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().optional(),
    service: z.string().min(1),
    date: z.date(),
    time: z.string().min(1),
    message: z.string().optional(),
  });

  const [state, formAction] = useFormState(bookAppointment, { message: "", errors: {}, success: false });

  const form = useForm<z.infer<typeof AppointmentSchema>>({
    resolver: zodResolver(AppointmentSchema),
  });

  useEffect(() => {
    if (state.success) {
      toast({
        title: appointment.success_title,
        description: appointment.success_message,
      });
      setIsOpen(false);
      form.reset();
    } else if (state.message && Object.keys(state.errors ?? {}).length > 0) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, appointment.success_title, appointment.success_message, form]);

  const onFormSubmit = (data: z.infer<typeof AppointmentSchema>) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone || '');
    formData.append('service', data.service);
    formData.append('date', format(data.date, 'yyyy-MM-dd'));
    formData.append('time', data.time);
    formData.append('message', data.message || '');
    formAction(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">{appointment.title}</DialogTitle>
          <DialogDescription>{appointment.success_message}</DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onFormSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
            <div className="space-y-4">
                 <div>
                    <Input {...form.register("name")} placeholder={appointment.name} />
                    {form.formState.errors.name && <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>}
                </div>
                 <div>
                    <Input {...form.register("email")} type="email" placeholder={appointment.email} />
                     {form.formState.errors.email && <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>}
                </div>
                <div>
                    <Input {...form.register("phone")} placeholder={appointment.phone} />
                </div>
                <div>
                     <Select onValueChange={(value) => form.setValue('service', value)}>
                        <SelectTrigger>
                            <SelectValue placeholder={appointment.select_service} />
                        </SelectTrigger>
                        <SelectContent>
                            {services.list.map((service: any) => (
                                <SelectItem key={service.id} value={service.title}>{service.title}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {form.formState.errors.service && <p className="text-sm text-destructive mt-1">{form.formState.errors.service.message}</p>}
                </div>
                 <div>
                    <Textarea {...form.register("message")} placeholder={appointment.message} />
                </div>
            </div>
             <div className="space-y-4">
                <div>
                    <Calendar
                        mode="single"
                        selected={form.watch("date")}
                        onSelect={(date) => form.setValue('date', date as Date)}
                        disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                        className="rounded-md border"
                    />
                    {form.formState.errors.date && <p className="text-sm text-destructive mt-1">{form.formState.errors.date.message}</p>}
                </div>
                 <div>
                     <Select onValueChange={(value) => form.setValue('time', value)}>
                        <SelectTrigger>
                            <SelectValue placeholder={appointment.select_time} />
                        </SelectTrigger>
                        <SelectContent>
                            {availableTimes.map((time) => (
                                <SelectItem key={time} value={time}>{time}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {form.formState.errors.time && <p className="text-sm text-destructive mt-1">{form.formState.errors.time.message}</p>}
                </div>
            </div>
             <DialogFooter className="md:col-span-2">
                <Button type="submit" size="lg">{appointment.book}</Button>
            </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentBooking;
