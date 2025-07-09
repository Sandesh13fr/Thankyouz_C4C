# ThankYouz - Culturally Adaptive Communications Generator

## 🚀 Project Overview

**ThankYouz** is an AI-powered system designed to generate personalized thank you letters for animal welfare donors in India, moving beyond generic templates to create heartfelt, customized, and culturally relevant messages.

This project was built during the **Code 4 Compassion Mumbai Hackathon**, with a focus on leveraging AI for animal advocacy in India and beyond.

---

## 📝 Hackathon Details

- **Event:** Code 4 Compassion Mumbai - Team & Project Assignments
- **Duration:** 1 Day
- **Focus:** AI-powered solutions for animal advocacy in India and beyond
- **Goal:** Build functional MVPs that solve real animal advocacy challenges

---

## 👥 Team

- **Sandesh Prakash Dawkhar**
- Prasad Kanchar
- Raj Pramod Chavan

---

## 🎯 What Is ThankYouz?

ThankYouz automates the generation of personalized thank you letters for animal welfare donors, incorporating donor details and Indian cultural elements to create messages that are both personal and appropriate for the philanthropic context.

---

## 🤖 AI Component

- **LLM-Driven Content:** Uses a Large Language Model (LLM) to generate thank you messages based on donor name, donation amount, and cause.
- **Cultural Adaptation:** Messages are crafted in culturally appropriate language for Indian philanthropy, including references and sentiments that resonate with Indian donors.

---

## ⚡ MVP: 1-Day Build

### Requirements

- **Input:** Manual trigger (e.g., webhook for new donation)
- **Process:** Pass donor details to LLM API → Generate personalized thank you message
- **Output:** Send AI-generated thank you email to donor
- **Bonus:** Messages include Indian cultural elements (festivals, values, gratitude expressions, etc.)

### MVP Workflow

1. **Donation Event:** New donation triggers a webhook or manual input.
2. **Data Processing:** Donor details (name, amount, cause) sent to the LLM.
3. **Message Generation:** LLM generates a personalized thank you message.
4. **Delivery:** Message is sent to donor via email or preferred channel.

---

## 🏆 Success Criteria

A successful system ensures each donor receives a unique, heartfelt thank you letter that is personal, meaningful, and culturally relevant.

---

## 💡 Example Use Case

- **Donor:** Ms. Sharma donates ₹5,000 to an animal rescue NGO.
- **System Action:** ThankYouz generates and sends a thank you email like:

  > "Dear Ms. Sharma,  
  > Your generous support of ₹5,000 towards animal rescue is invaluable. In Indian tradition, kindness to animals is seen as a noble act, and your contribution will help countless lives. Thank you for your compassion and support—together, we are making a difference!"

---

## 👩‍💻 Technologies Used

- **AI/LLM API:** (e.g., OpenAI GPT, Azure OpenAI)
- **Backend:** (Node.js, Python, etc. - specify based on implementation)
- **Webhooks:** For donation event triggers
- **Email Service:** (e.g., SendGrid, SMTP) for automated message delivery

---

## 📦 Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Sandesh13fr/Thankyouz_C4C.git
   cd Thankyouz_C4C
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   pip install -r requirements.txt
   ```

3. **Configure API keys:**  
   Set up your LLM provider and email service credentials in `.env`.

4. **Run the project:**
   ```sh
   npm start
   # or
   python app.py
   ```

5. **Test donation trigger:**  
   Use a webhook or manual trigger to simulate a donation and observe the generated thank you email.

---

## 🌏 Cultural Adaptation

ThankYouz is designed with Indian philanthropy in mind, ensuring messages include:

- Indian festivals/occasions references
- Traditional values and gratitude expressions
- Regional language support (future roadmap)

---

## 🛣️ Roadmap

- [ ] Enable regional language support (Hindi, Marathi, etc.)
- [ ] Integrate with popular donation platforms
- [ ] Enhance personalization with donor history and preferences
- [ ] Advanced analytics and reporting for NGOs

---

## 🤝 Contributing

We welcome contributions! Please open issues or submit pull requests for improvements or new features.

---

## 📄 License

[MIT License](LICENSE)

---

## 🙏 Acknowledgements

Thanks to Code 4 Compassion Mumbai organizers and all donors who inspire change for animal welfare.

---

![Hackathon Overview and Team Assignments](https://iili.io/F13h5LG.jpg)
