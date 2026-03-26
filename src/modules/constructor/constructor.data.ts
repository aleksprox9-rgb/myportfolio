import { I18N_PATHS } from "@/config/i18n-paths";
import type { IConstructorConfig } from "./constructor.type";
import { t } from 'i18next';

export const ConstructorConfig: IConstructorConfig = {
  path: I18N_PATHS.constructor,
  questions: [
    {
      id: "project_type",
      multiple: false,
      options: [
        { id: "landing", weights: { price: 30, time: 5 } },
        { id: "corporate", weights: { price: 80, time: 14 } },
        { id: "ecommerce", weights: { price: 150, time: 25 } },
        { id: "portfolio", weights: { price: 40, time: 7 } },
        { id: "complex_service", weights: { price: 300, time: 45 } },
      ],
    },
    {
      id: "features",
      multiple: true,
      options: [
        {
          id: "admin_panel",
          weights: { price: 40, time: 5 },
          visibleIf: {
            questionId: "project_type",
            includes: ["corporate", "ecommerce", "complex_service"],
          },
        },
        {
          id: "payments",
          weights: { price: 50, time: 7 },
          visibleIf: {
            questionId: "project_type",
            includes: ["ecommerce", "complex_service"],
          },
        },
        { id: "feedback_forms", weights: { price: 15, time: 2 } },
        {
          id: "auth",
          weights: { price: 60, time: 10 },
          visibleIf: {
            questionId: "project_type",
            includes: ["complex_service", "ecommerce"],
          },
        },
        { id: "multilinguality", weights: { price: 30, time: 4 } },
      ],
    },
    {
      id: "visual_and_interactive",
      multiple: true,
      options: [
        { id: "themes", weights: { price: 20, time: 3 } },
        { id: "mobile", weights: { price: 25, time: 4 } },
        { id: "basic_animation", weights: { price: 15, time: 3 } },
        { id: "hard_animation", weights: { price: 100, time: 15 } },
      ],
    },
    {
      id: "promotion_and_support",
      multiple: true,
      options: [
        { id: "analytics", weights: { price: 10, time: 1 } },
        { id: "seo", weights: { price: 30, time: 5 } },
        { id: "pagespeed", weights: { price: 40, time: 4 } },
        { id: "hosting_and_domain", weights: { price: 10, time: 1 } },
      ],
    },
  ],

  calculator: {
    price: (answers) => {
      return Object.values(answers).flat().length * 100;
    },
    time: (answers) => {
      return Object.values(answers).flat().length * 2;
    },
  },

  messageBuilder: ({ selectedOptions }) => {
    const labels = selectedOptions.map((o) => t(`${ConstructorConfig.path}.options.${o.id}.label`));

    return [
      "Здраствуйте, мне нужен сайт со следующими характеристиками:",
      labels.join(", "),
    ];
  },
};
