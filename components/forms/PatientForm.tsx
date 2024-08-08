"use client";

import { z } from "zod"; //npx shadcn-ui@latest add form
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import SubmitButton from "../SubmitButton";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { UserFormValidation } from "@/lib/validation";
import { createUser } from "@/lib/actions/patient.actions";
import CustomFormField, { FormFieldTypes } from "../CustomFormField";

const PatientForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    // 1. Define your form.
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "", // 기본값으로 username을 빈 문자열로 설정
            email: "",
            phone: "",
          
        },
    });

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
        setIsLoading(true);
    
        try {
          const user = {
            name: values.name,
            email: values.email,
            phone: values.phone,
          };
    
          const newUser = await createUser(user);
    
          if (newUser) {
            router.push(`/patients/${newUser.$id}/register`);
          }
        } catch (error) {
          console.log(error);
        }
    
        setIsLoading(false);
      };

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
            <section className="mb-12 space-y-4">
                <h1 className="header">Hi there 👋</h1>
                <p className="text-dark-700">Schedule your first appointment</p>
            </section>
            
            {/* Full name */}
            <CustomFormField 
                fieldType={FormFieldTypes.INPUT}
                control ={form.control}
                name="name"
                label="Full name"
                placeholder="Write your full name"
                iconSrc="/assets/icons/user.svg"
                iconAlt="user"
            />
            
            {/* email */}
            <CustomFormField
                fieldType={FormFieldTypes.INPUT}
                control={form.control}
                name="email"
                label="Email"
                placeholder="email@gmail.com"
                iconSrc="/assets/icons/email.svg"
                iconAlt="email"
            />
            
            {/* phone # */}
            <CustomFormField
                fieldType={FormFieldTypes.PHONE_INPUT}
                control={form.control}
                name="phone"
                label="Phone number"
                placeholder="(123) 456-7899"
            />

            <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
        </form>
        </Form>
    );
};

export default PatientForm;
