import React from "react";
import { useParams } from "react-outer-dom";
import moment from "moment";
import { AnimatePresence, motion } from "framer-motion";
import { LuCircleAlert, LuListCollapse } from "react-icons/lu";
import SpinnerLoader from "../../components/Loader/SpinnerLoader";
import { toast } from "react-hot-toast";

const InterviewPrep = () => {
  const { sessionId } = useParams();

  const [sessionData, setSessionData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const [openLeanMoreDrawer, setOpenLeanMoreDrawer] = useState(false);
  const [explanaion, setExplanation] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateLoader, setIsUpdateLoader] = useState(false);

  // Fetch session data by session id
  const fetchSessionDetailsById = async () => {
    try {
      const response = await axiosInstance.get(
        API_PATHS.SESSION.GYE_ONE(sessionID)
      );

      if (response.data && response.data.session) {
        setSessionData(response.data.session);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //Generate Concept Explanation
  const generationConceptExplanation = async (question) => {};

  //Pin Question
  const toggleQuestionPinStatus = async (questionId) => {};

  //Add more questions to a session
  const uploadMoreQuestions = async () => {};

  useEffect(() => {
    if (sessionId) {
      fetchSessionDetailsById();
    }

    return () => {};
  }, []);
  return (
    <DashboardLayout>
      <RoleInfoHeader
        role={sessionData?.role || ""}
        topicsToFocus={sessionData?.topicsToFocus || ""}
        experience={sessionData?.experience || "-"}
        questions={sessionData?.question?.length || "-"}
        description={sessionData?.description || ""}
        lastUpdated={
          sessionData?.updatedAt
            ? moment(sessionData.updateAt).format("Do MMM YYYY")
             : ""
        }
      />
    
      <DashboardLayout className="container mx-auto pt-4 pb-4 px-4 md:px-0">
        <h2 className="text-lg font-semibold color-black">Interview Q & A</h2>

        <div className="grid grid-cols-12 gap-4 mt-5 mb-10">
          <div
            className={`col-span-12 ${
               openLeanMoreDrawer ? "md:col-end-7" : "md:col-end-8"
            }`}
          >
            <AnimatePresence>
             {sessionData?.questions?.map((data,index)=> {
               return(
                <motion.div  
                  key={data._id || index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition= {{
                    duration: 0.4,
                    type: "spring",
                    stiffness:100,
                    delay: index * 0.1,
                    damping: 15,
                  }}
                  layout // This is the key prop thjat animates position changes
                  layoutId={`question-${data._id || index}`} //Helps framer track specific items 
                >
                  <motion.div>
                    <QuestionCard
                      question={data?.question}
                      answer={data?.answer}
                      onLearnMore={() => 
                        generateConceptExplanation(data.question)
                      }
                      isPinned={data?.isPinned}
                      onTogglePin={() => toggleQuestionPinStatus(data._id)}
                    />
                </>
                </motion.div> 
              );
             })}
            </AnimatePresence> 
          </div>
        </div>  
      </DashboardLayout>
    </DashboardLayout>
  );
};

export default InterviewPrep
