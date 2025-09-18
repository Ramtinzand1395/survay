"use client";
import React, { useState, useCallback } from "react";
import {
  SurveySection,
  RadioGroup,
  RatingScale,
  TextAreaInput,
  Modal,
  ButtonLoading,
} from "./components";

export default function Home() {
  const [formData, setFormData] = useState({
    overallSatisfaction: null,
    planningAppropriate: null,
    bestMoment: "",
    foodQuality: null,
    accommodationQuality: null,
    mostAttractiveActivity: "",
    activitiesVaried: null,
    timeManagement: null,
    staffBehaviorsuggestions: null,
    staffAvailability: null,
    futureParticipation: null,
    suggestions: "",
    feelingSummary: "",
    staffBehavior: "",
    name: "",
    lastName: "",
    mobile: "",
  });

  const [OpenModal, setOpenModal] = useState(true);
  const [loading, setloading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Survey Data Submitted:", formData);
    setloading(true);

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Server Response:", data);

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Error submitting survey:", data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setloading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 text-center animate-fade-in">
          <svg
            className="w-20 h-20 mx-auto text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            از شما متشکریم!
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            نظر شما با موفقیت ثبت شد. بازخورد شما به ما در بهبود اردوهای آینده
            کمک می‌کند.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      {OpenModal && (
        <Modal
          setOpenModal={setOpenModal}
          info={formData}
          setifno={setFormData}
        />
      )}
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">فرم نظرسنجی اردو</h1>
          <p className="text-lg text-gray-600 mt-2">
            لطفاً با پاسخ به سوالات ما را در ارزیابی این اردو یاری فرمایید.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-12"
        >
          <SurveySection title="بخش ۱: ارزیابی کلی">
            <RatingScale
              question="از ۱ تا ۵، رضایت کلی شما از اردو چه‌قدر بود؟"
              name="overallSatisfaction"
              value={formData.overallSatisfaction}
              onChange={(val) => handleInputChange("overallSatisfaction", val)}
            />
            <RadioGroup
              question="آیا برنامه‌ریزی اردو را مناسب می‌دانید؟"
              name="planningAppropriate"
              options={[
                { value: "yes", label: "بله" },
                { value: "somewhat", label: "تا حدی" },
                { value: "no", label: "خیر" },
              ]}
              value={formData.planningAppropriate}
              onChange={(val) => handleInputChange("planningAppropriate", val)}
            />
            {/* <TextAreaInput
              question="بهترین لحظه یا بخش اردو برای شما چه بود؟"
              name="bestMoment"
              value={formData.bestMoment}
              onChange={(val) => handleInputChange("bestMoment", val)}
            /> */}
          </SurveySection>

          <SurveySection title="بخش ۲: امکانات و خدمات">
            <RadioGroup
              question="کیفیت غذا و پذیرایی را چگونه ارزیابی می‌کنید؟"
              name="foodQuality"
              options={[
                { value: "poor", label: "ضعیف" },
                { value: "average", label: "متوسط" },
                { value: "good", label: "خوب" },
                { value: "excellent", label: "عالی" },
              ]}
              value={formData.foodQuality}
              onChange={(val) => handleInputChange("foodQuality", val)}
            />
            <RadioGroup
              question="محل اقامت و امکانات رفاهی (خوابگاه، سرویس بهداشتی، نظافت) را چگونه دیدید؟"
              name="accommodationQuality"
              options={[
                { value: "poor", label: "ضعیف" },
                { value: "average", label: "متوسط" },
                { value: "good", label: "خوب" },
                { value: "excellent", label: "عالی" },
              ]}
              value={formData.accommodationQuality}
              onChange={(val) => handleInputChange("accommodationQuality", val)}
            />
            {/* <RadioGroup
                question="حمل‌ونقل (رفت و برگشت، سرویس‌ها) رضایت‌بخش بود؟"
                name="transportationSatisfaction"
                options={[
                  { value: "yes", label: "بله" },
                  { value: "somewhat", label: "تا حدی" },
                  { value: "no", label: "خیر" },
                ]}
                value={formData.transportationSatisfaction}
                onChange={(val) =>
                  handleInputChange("transportationSatisfaction", val)
                }
              /> */}
          </SurveySection>

          <SurveySection title="بخش ۳: برنامه‌ها و فعالیت‌ها">
            <RadioGroup
              question="آیا برنامه‌های فرهنگی/تفریحی کافی و متنوع بودند؟"
              name="activitiesVaried"
              options={[
                { value: "yes", label: "بله" },
                { value: "somewhat", label: "تا حدی" },
                { value: "no", label: "خیر" },
              ]}
              value={formData.activitiesVaried}
              onChange={(val) => handleInputChange("activitiesVaried", val)}
            />
            <RadioGroup
              question="میزان نظم و مدیریت زمان در برنامه‌ها را چگونه ارزیابی می‌کنید؟"
              name="timeManagement"
              options={[
                { value: "poor", label: "ضعیف" },
                { value: "average", label: "متوسط" },
                { value: "good", label: "خوب" },
                { value: "excellent", label: "عالی" },
              ]}
              value={formData.timeManagement}
              onChange={(val) => handleInputChange("timeManagement", val)}
            />
            <TextAreaInput
              question="کدام فعالیت یا برنامه بیشترین جذابیت را برای شما داشت؟"
              name="mostAttractiveActivity"
              value={formData.mostAttractiveActivity}
              onChange={(val) =>
                handleInputChange("mostAttractiveActivity", val)
              }
            />
            <TextAreaInput
              question="به نظر شما جای چه برنامه ای در اردو خالی بود؟"
              name="bestMoment"
              value={formData.bestMoment}
              onChange={(val) => handleInputChange("bestMoment", val)}
            />
          </SurveySection>

          <SurveySection title="بخش ۴: مسئولین و مربیان">
            <RadioGroup
              question="رفتار و همکاری مسئولین اردو را چگونه ارزیابی می‌کنید؟"
              name="staffBehavior"
              options={[
                { value: "poor", label: "ضعیف" },
                { value: "average", label: "متوسط" },
                { value: "good", label: "خوب" },
                { value: "excellent", label: "عالی" },
              ]}
              value={formData.staffBehavior}
              onChange={(val) => handleInputChange("staffBehavior", val)}
            />
            <RadioGroup
              question="آیا مسئولین در دسترس و پاسخگو بودند؟"
              name="staffAvailability"
              options={[
                { value: "yes", label: "بله" },
                { value: "somewhat", label: "تا حدی" },
                { value: "no", label: "خیر" },
              ]}
              value={formData.staffAvailability}
              onChange={(val) => handleInputChange("staffAvailability", val)}
            />
            <TextAreaInput
              question="اگر پیشنهادی برای بهبود اردوهای آینده دارید، بنویسید:"
              name="staffBehaviorsuggestions"
              value={formData.staffBehaviorsuggestions}
              onChange={(val) =>
                handleInputChange("staffBehaviorsuggestions", val)
              }
              rows={4}
            />
          </SurveySection>

          <SurveySection title="بخش ۵: پیشنهادها و آینده">
            <RadioGroup
              question="آیا تمایل دارید در اردوهای بعدی هم شرکت کنید؟"
              name="futureParticipation"
              options={[
                { value: "definitely", label: "بله حتما" },
                { value: "maybe", label: "شاید" },
                { value: "no", label: "خیر" },
              ]}
              value={formData.futureParticipation}
              onChange={(val) => handleInputChange("futureParticipation", val)}
            />
            <TextAreaInput
              question=" در کل اردو را چه گونه دیدید اگر پیشنهادی برای بهبود اردوهای آینده دارید، بنویسید:"
              name="suggestions"
              value={formData.suggestions}
              onChange={(val) => handleInputChange("suggestions", val)}
              rows={4}
            />
            <TextAreaInput
              question="یک جمله کوتاه درباره احساستان نسبت به این اردو بنویسید:"
              name="feelingSummary"
              value={formData.feelingSummary}
              onChange={(val) => handleInputChange("feelingSummary", val)}
            />
          </SurveySection>

          <div className="flex justify-end pt-8">
            {loading ? (
              <ButtonLoading />
            ) : (
              <button
                type="submit"
                className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform transform hover:scale-105"
              >
                ارسال نظرسنجی
              </button>
            )}
            {/* <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform transform hover:scale-105"
            >
              ارسال نظرسنجی
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
}
