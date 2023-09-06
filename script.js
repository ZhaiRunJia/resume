const resume = {
  firstName: 'RunJia',
  lastName: 'Zhai',
  jobTitle: 'Accountant, FinTech researcher',
  city: 'Kuala Lumpur',
  postalCode: '050023',
  country: 'Malaysia',
  phone: '+60175733742',
  email: 'abbyzhaihhh@gmail.com',
  education: [
    {
      school: 'University Utara Malaysia',
      degree: 'Bachelor degree',
      graduationDate: '2021',
      description: 'Accounting'
    },
    {
      school: 'University Sains Malaysia',
      degree: 'Master degree',
      graduationDate: 'present',
      description: 'Finance (research)'
    }
  ],
  links: [
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/runjia-zhai-88b44a206'
    }
  ],
  skills: [
    'MS Office',
    'Power Point',
    'Python',
    'Excel',
    'Quickbooks',
    'ERP (SAP & Oracle)',
    'Hyperion',
    'SQL',
    'IBM Cognos',
    'HTML',
    'CSS',
    'JavaScript',
    'Original Research',
    'Budget Development',
    'Project Management',
  ],
  languages: ['English', 'Chinese'],
  professionalSummary: `Accountant with a history of accurately and efficiently supporting accounting activities for a diverse range of clientele. 2+ years of accounting experience in presenting data, analysing cost control, providing financial reports, and delivering profit and loss statements under time pressures.`,
  employmentHistory: [
    {
      jobTitle: 'Accountant (Full-time)',
      startDate: 'October, 2021',
      endDate: 'October, 2022',
      employer: 'LING HANG YIN WU CO.LTD',
      city: 'Shan Dong - China',
      achievements: [
        'Completed daily accounting tasks including tracking funds, preparing deposits and recording accounts with ERP system.',
        'Collaborate with the finance team on yearly forecasting efforts.',
        'Support the payment processing team.',
        'Complied general ledger entries on a short schedule with nearly 100% accuracy.',
        'Prepared month-end balance sheet reconciliations including but not limited to recording transcations, creating reports, tracking income, and checking expense figures for accuracy and legitimacy.',
        'Monitor the status of transactions and coding structures to ensure alignment with company policy and guidelines.',
        'Reviewed accounts payable and invoice listing to confirm validity and to conduct a budget update as necessary.'
      ]
    },
    {
      jobTitle: 'Junior Accountant (Internship)',
      startDate: 'March, 2021',
      endDate: 'September, 2021',
      employer: 'CHENG & CO GROUP',
      city: 'Selangor - Malaysia',
      achievements: [
        'Assist with month-end financial reports, audits, and data entry.',
        'Help with accounts receivable, payable, bank statement reconciliation, and post journal entries by using ERP system.',
        'Prepare accurate, timely financial reports of company expenditures following the established schedule.',
        'Maintained financial records and ensured proper recording of operations required to the financial workflow.',
        'Managed the development and improvement from a handbook system to a computerized environment.'
      ]
    },
    {
      jobTitle: 'Accountant (Part-time)',
      startDate: 'March, 2021',
      endDate: 'September, 2021',
      employer: 'SAHALNAK',
      city: 'Penang - Malaysia',
      achievements: [
        'Reconcile balance sheet accounts, and perform credit checks.',
        'Manage monthly tracking of physical inventory.',
        'Manage accounting activities to ensure compliance with accounting principles, policies, and external audits.',
        'Produce profit and loss statements and other financial reports, including audit vendor list price.'
      ]
    },
  ],
  achievements: [
    {
      title: 'Huawei Developer Competition APAC',
      date: 'August 2023',
      achievements: []
    },
    {
      title:'W3Schools',
      date: 'March 2023',
      achievements: []
    },
  ],
  photo: 'pic.png',
}

const formatResume = (r) => ({
  ...r,
  address: [
    r.country,
    r.city,
    r.postalCode
  ].filter(Boolean).join(', ')
})

new Vue({
  el: "#app",
  data: formatResume(resume)
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
  document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
  customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded()
