import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2003 - 2008"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Chongfu Primary School
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Singapore</h4>

          <p> Primary School Leaving Examination (PSLE)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009 - 2012"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            North View Secondary School
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Singapore</h4>

          <p>
            {" "}
            Singapore-Cambridge General Certificate of Education Ordinary Level
            (GCE O-Level)
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Yishun Junior College
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Singapore</h4>

          <p>
            {" "}
            Singapore-Cambridge General Certificate of Education Advanced Level
            (GCE A-Level)
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Singapore University of Technology and Design
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Singapore</h4>

          <p> Bachelor's Degree in Computer Science and Design</p>
          <p> Focus Track: User Interface Design</p>
          <p> GPA 3.03/5.00</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2018"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Telesales Officer - Development Bank of Singapore (DBS)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Singapore</h4>
          <p>
            Achieved sales target of closing the sales of 30% of all calls
            received.
          </p>
          <p>
            Nominated Agent of the month for consistently achieving high sales
            closure rate of over 40% from all calls received and highest Debt
            Consolidation Plan (DCP) closed for the team consecutively for 3
            months with good work attitude.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            IT Intern - ACP Computer Pte. Ltd.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Singapore</h4>
          <p>
            Facilitated and organised the process of hardware development and
            testing of software in order to improve quality and performance of
            systems and platforms.
          </p>
          <p>
            Developed and improved version of the infrared thermometer's
            software and hardware for portability and also resulted in increase
            of accuracy above 50%.
          </p>
          <p>
            Conducted user testing on company's e-learning platform which
            increase user satisfaction rate by 50%.
          </p>
          <p>
            Proposed user interface improvements including placement of buttons
            and nconsistencies in the website as well as bug finding to create a
            user friendly environment.
          </p>
          <p>
            Developed marketing and instructional videos as well as documents
            for the client using Adobe Premiere Pro and Microsoft Word which
            resulted in lower query rate and increased number of clients.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Data Analyst Trainee - Tata Consultancy Pte. Ltd.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Singapore</h4>
          <p>
            Underwent 6 months of specialised Data Analyst Training, acquiring
            valuable data analytics skills, including data cleaning and data
            visualisation skills.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer Consultant - FDM Group
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Singapore</h4>
          <p>Underwent 3 months of formal software development training.</p>
          <p>
            Acquired the following skills: Professional Skills, SQL, Java
            Fundamentals, Collections & TDD, Data Structures & Algorithms, SOLID
            Principles, Java 8 and Beyond, Data Access, Spring, Restful
            Services, Cloud Fundamentals.
          </p>
          <p>
            Currently attached to ANZ Bank as a Site Reliabilty Engineer for 2
            years.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
