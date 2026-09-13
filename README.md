# **Emora by DCSION3**

**Team**: Hing Zi Feng, Lee Kai Shuen, Wong Soon Hong, Yong Zi Jing

**Problem Statement:** Stress & Workload Manager

**Video Presentation:**&nbsp;

**Presentation Slides:** [https://canva.link/99wq4808xd4f8ns](https://canva.link/99wq4808xd4f8ns)

&nbsp;

&nbsp;

1. ## **Project Overview**

Time management is becoming increasingly difficult. Students in particular are the hardest hit group. Their obligations cover not only academic work, but they also have to juggle between socialising, family members without sacrificing a sufficient amount of time for sports and wind-down time.&nbsp;

&nbsp;

To-do apps and calendars are what we consider bears the closest resemblance to what we are actually solving but both of them fall short in certain crucial aspects.

&nbsp;

| Application | Where do they fall short? | Emora’s proposition |
| :---- | :---- | :---- |
| To-do apps | Most to-do apps assumes that tasks especially academic related tasks are one-off and can be performed within one sitting with a clear cut duration, start and end date. The way it is designed to be used is tempting to cause students to overestimate the workload they are able to handle or underestimate the amount of time that needs to be scheduled in completing the said tasks. | We treat academic tasks as micro tasks that can be divided and spread out as long as its completion is done by the due date. Category needs to manually created and tedious logging People rely on it to keep track of what needs to be done tentatively in the future, but not what has been done, which makes comparison and keeping track of lifestyle difficult Fitness activities from Strava Sleep data from iOS, time when the alarm first engaged and time when the phone is no longer used serves as a very useful metrics in determining true sleep time |
| Calendars | Lacks context for public holidays or the anomalies whereby classes are cancelled, postponed or rescheduled to a later date. Doing so usually requires very meticulous planning. Academic calendars are known in advance, but rescheduling are hardly known weeks prior, usually only a week before the lesson starts.&nbsp; | Contextual understanding of Malaysian public holidays, ability to reschedule tasks easier |

&nbsp;

Our solution

We present Emora, a workload manager that is personalised and equipped with contextualised information. It is tailor-made to meet the needs of students who are handling not just academic obligations, but rather juggling between social and family responsibilities, without sacrificing their mental wellbeing.&nbsp;

&nbsp;

Feature sets

Comprehensive dashboard that shows the time spent on each category of activities covering 3 main groups namely (academic, personal and work).

&nbsp;

A timetable and schedule manager that integrates with students’ routine through Google Calendar synchronisation for their daily timetable or uploading the image of the timetable.&nbsp;

&nbsp;

Task manager that breaks down daunting assignments with tight deadlines, into manageable parts that is spread out across the free and easy time.&nbsp;

&nbsp;

Stress regulator is a mini game that mimics scientific-proven breathing sequence \- inhale to exhale duration ratio of 1:2. The user presses “space” for 8 seconds to inflate the balloon for three successful time.&nbsp;

&nbsp;

Integrated pop up chat assistant that is able to understand the user’s current emotion and change the site-wide theme to match the emotion

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

2. ## **Ideation & Process**

   ### 2.1 Ideas we considered

&nbsp;

| Idea | Why it was dropped / kept |
| :---- | :---- |
| Google and Outlook Calendar synchronisation for the timetable and workload manager | Reduce redundant creating timetable and rely on existing source. |
| AI schedule importer that extracts user existing timetable from image, pdf, and etc. Then import it into timetable, user can also prompt to the ai using text and ai will understand then import the timetable according to user prompt | Make it easy for user to import timetable, without manually adding each of the activity into the timetable and let ai do the job |
| Scheduler that suggests allocation of time consuming tasks into manageable portions with drag-and-drop interactivity | An intuitive approach to visualise the time that can be spent |
| Emora ai buddy docked at the bottom of the viewport and expands when triggered with the ability to change site theme based on user’s current emotion, and also responds back to the user, based on what they been through by analysing the user today/this week timetable | Provide a sense of approachability and empathetic understanding to the user. |
| Ai assistant tab that will suggest user the best timetable schedule by approaching to user when detected adjustable timetable. User can also use the Ai assistant for general use such as changing timetable, adding schedule. And approach to ai assistant to seek for the low workload day and add more task or workshift to that day.&nbsp; | A general use of ai assistant that covered most of the important feature for user |
| Ai suggested timetable adjustment and rest time to help user balance their workload in everyday, to prevent user being overloaded | Help balancing user workload before they become overwhelmed |
| Health and fitness app synchronization (Strava) to fetch health related data&nbsp; | Provide historical data which are unlikely to be manually provided by the user to maintain accuracy in tracking the distribution of a person’s daily routine |
| Spotify integration to suggest music from user’s playlist or just ask for a song that the user thinks they want to listen. From there a playlist (radio)is generated. **(Dropped)** | Rely on workaround approaches rather than truly sanctioned official channels. Rate of failure is likely to be high |
| Face orientation and gesture controlled cat related meme generator to entertain or make user happy **(Dropped)** | Likely low universal suitability for all users&nbsp; |

&nbsp;

&nbsp;

### 

### 2.2 Ideation Boards

Link: [https://www.tldraw.com/f/xax6UxXrT-Q7Wuss3DEvC?d=v58975.-7024.25600.13307.page](https://www.tldraw.com/f/xax6UxXrT-Q7Wuss3DEvC?d=v58975.-7024.25600.13307.page)

&nbsp;

&nbsp;

### 

### 2.3 Mentor Consultation

&nbsp;

| Date | Mentor | Feedback received | What was changed |
| :---- | :---- | :---- | :---- |
| 10 September | Zach Khong&nbsp; | Visual clutterness in the overview tab resulting unintuitiveness in understanding the data presented | Reduced the tracked category from 5 to 3 Removed redundant and unnecessary charts. |
| 12 September&nbsp; | Janelle Tan | A distinct log only journal tab with waveform animation that matches the emotion and sentiment of the user text or dictation input might not necessarily be able to set itself apart from existing document or journal application. | Implemented a floating dock chat bubble that gets expanded when triggered and enables a site-wide theme change that matches with the user’s current emotion.&nbsp; |

&nbsp;

## 

## 

3. ## **Design & Prototype**

   **UI Prototype:** [http://o7f8cifsp6c4ccztaw5ixzsm.149.118.132.238.sslip.io/](http://o7f8cifsp6c4ccztaw5ixzsm.149.118.132.238.sslip.io/)  
   &nbsp;  
   &nbsp;  
   &nbsp;  
   &nbsp;

   ## 

4. ## **What Makes It Different**&nbsp;

   &nbsp;

| Existing solution | Our take&nbsp; |
| :---- | :---- |
| To-do list require users to mentally go through different timings and manually create&nbsp; | We used an LLM to infer the mental and cognitive load required for completing that particular task and suggest substeps to complete |
| Task scheduling requires a user’s due diligence and own initiative to choose and select which is an extremely tedious process | Timetable schedule for to-do list tasks with the ability to choose between more than one time and dynamically adjust the remaining available time for other tasks |
| Descriptive and generic advice on how to handle and tackle stress in the FAQ page | We used an interactive balloon breathing practice as a visual cue for inhalation and exhalation to regulate stress |

   &nbsp;

   &nbsp;

   ## 

5. ##  **Technical Architecture & Feasibility**

&nbsp;

   **The system is divided into five main parts:**

   &nbsp;

   1\. Users

   2\. Application Server

   3\. Database

   4\. AI Models

   5\. Google Calendar Integration

   &nbsp;

   \---

   &nbsp;

   **1\. Users**

   &nbsp;

   Emora can be accessed through:

   &nbsp;

   \- \*\*Web Browser\*\* — Users access Emora directly through a browser.

   \- \*\*Mobile App\*\* — A mobile version of Emora is packaged from the web application using Capacitor.

   &nbsp;

   Both platforms communicate with the same backend, so users can access the same data across devices.

   &nbsp;

   \---

   &nbsp;

   **2\. Application Server**

   &nbsp;

   The main Emora application is hosted on an \*\*Oracle VPS\*\* using \*\*Coolify\*\*.

   &nbsp;

   It contains two main components:

   &nbsp;

   **Frontend**

   &nbsp;

   The frontend is responsible for the user interface.

   &nbsp;

   \*\*Technology:\*\*

   \- HTML

   \- CSS

   &nbsp;

   The frontend allows users to:

   &nbsp;

   \- View their workload

   \- View their timetable

   \- Manage tasks

   \- View workload and burnout information

   \- Interact with Emora's AI features

   &nbsp;

   **Backend API**

   &nbsp;

   The backend handles the main application logic.

   &nbsp;

   \*\*Technology:\*\*

   \- Python

   \- Flask

   &nbsp;

   The backend is responsible for:

   &nbsp;

   \- Processing user requests

   \- Managing tasks and schedules

   \- Calculating workload information

   \- Communicating with the database

   \- Sending AI requests to OpenRouter

   \- Connecting to Google Calendar

   &nbsp;

   The frontend communicates with the backend through an API.

   &nbsp;

   \---

   &nbsp;

   **3\. Database**

   &nbsp;

   Emora uses \*\*Supabase\*\* to host its PostgreSQL database.

   &nbsp;

   The database stores important application data such as:

   &nbsp;

   \- User information

   \- Timetable schedules

   \- Tasks

   \- Workload data

   \- Historical workload information

   \- Other application settings

   &nbsp;

   The backend communicates with Supabase to read and update this information.

   &nbsp;

   \---

   &nbsp;

   **4\. AI Models**

   &nbsp;

   Emora uses \*\*OpenRouter\*\* as the AI provider.

   &nbsp;

   Instead of connecting directly to a single AI model, the backend sends AI requests through OpenRouter.

   &nbsp;

   The current model setup uses multiple models:

   &nbsp;

   **Primary Model**

   \*\*Ling 3.0 Flash VL\*\*

   &nbsp;

   Used as the main AI model because it provides strong performance while being available for free.

   &nbsp;

   **Fallback Model**

   \*\*Llama 3.3 70B\*\*

   &nbsp;

   Used when the primary model is unavailable or fails.

   &nbsp;

   **Final Fallback**

   \*\*Gemini 2.5 Flash\*\*

   &nbsp;

   Used as an additional backup option.

   &nbsp;

   This setup allows Emora to continue providing AI functionality even if the primary model is temporarily unavailable.

   &nbsp;

   \---

   &nbsp;

   **5\. Google Calendar Integration**

   &nbsp;

   Emora can connect with \*\*Google Calendar\*\* to help users synchronize their schedules.

   &nbsp;

   The integration uses \*\*Google OAuth 2.0\*\*.

   &nbsp;

   **Basic Flow**

   &nbsp;

   1\. User chooses to connect Google Calendar.

   2\. User gives Emora permission through Google OAuth.

   3\. Emora receives authorized access.

   4\. The backend communicates with Google Calendar.

   5\. Calendar events can be synchronized with Emora.

   &nbsp;

   This allows Emora to use existing calendar information without requiring users to manually enter every schedule.

   &nbsp;

   \---

   &nbsp;

   **Overall Data Flow**

   &nbsp;

   The basic flow of Emora is:

   &nbsp;

   **User → Frontend → Backend API → Database**

   &nbsp;

   When AI assistance is required:

   &nbsp;

   **User → Frontend → Backend API → OpenRouter → AI Model → Backend → Frontend**

   &nbsp;

   For Google Calendar:

   &nbsp;

   **User → Frontend → Backend API → Google OAuth → Google Calendar**

   &nbsp;

   \---

   &nbsp;

   **Deployment Overview**

   &nbsp;

   | Component | Technology / Service | Purpose |

   |---|---|---|

   | Frontend | HTML / CSS | User interface |

   | Backend | Python Flask | Application logic and API |

   | Hosting | Oracle VPS \+ Coolify | Runs the Emora application |

   | Database | Supabase PostgreSQL | Stores application data |

   | AI Gateway | OpenRouter | Connects Emora to AI models |

   | Primary AI | Ling 3.0 Flash VL:free | Main AI model |

   | AI Fallback | Llama 3.3 70B:free | Backup AI model |

   | Final AI Fallback | Gemini 2.5 Flash:cheap | Additional backup |

   | Calendar | Google Calendar API | Calendar synchronization |

   | Authentication | Google OAuth 2.0 | Allows users to authorize Calendar access |

   | Mobile | Capacitor | Packages the web app as a mobile application |

   &nbsp;

&nbsp;

### Build plan & scope

&nbsp;

&nbsp;

&nbsp;

| Feature | Current State | Build Plan Requirements |
| :---- | :---- | :---- |
| Database | Database is empty. Nothing is currently written/read; pages reload to the same hardcoded data. | Connect all app data to the database. Replace hardcoded data with real CRUD operations and persistent user data. |
| User Authentication | Login and sign-up are not implemented. | Implement sign-up, login, logout, session management, and user profiles. |
| Homepage Activity Percentage | Activity categorization is incomplete, so workload percentages are not fully accurate. | Complete activity categorization rules and connect them to the Academic, Work, and Personal workload calculations. |
| AI Assistant — User Preference | AI can scan timetables and process user input, but does not proactively interact with the user. | Make the AI understand user preferences and proactively provide relevant suggestions based on their schedule and workload. |
| Emora AI Companion | Companion mainly collects the user's emotions but does not understand their actual schedule/workload. | Combine emotion, timetable, tasks, and workload data so the companion can understand the user's situation before responding. |
| Interactive Timetable & Task List | Timetable lacks detail and task-list navigation is flawed. | Improve timetable/task interactions, navigation, task details, editing, and Fixed/Non-Fixed schedule handling. |
| Mobile UI & Home Screen Gadget | Mobile UI and home-screen gadget have not been built. | Build responsive mobile UI and a mobile home-screen widget/gadget for quick workload updates and AI suggestions. |
| Google Calendar API | Calendar import works conceptually, but extracted activities are not categorized yet. | Categorize imported calendar activities automatically and map them into Emora's workload system. |
| Outlook Calendar | Not implemented. | Add Outlook Calendar integration and apply the same activity extraction and categorization system. |
| AI Suggested Rest Time | Not implemented. | Use workload, schedule gaps, and user preferences to recommend suitable rest/recovery periods. |
| AI Calendar Adjustment | Not implemented. | Detect overloaded days and suggest moving flexible tasks to lower-stress periods. |

&nbsp;