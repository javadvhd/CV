import { ThemeProvider } from "setup/theme/theme-provider";
import { Profile } from "components/profile/profile";
import "./App.css";
import { Chip, Grid2, Grid2Props, styled } from "@mui/material";
import { Typography } from "components/ui/typography";
import {
  ResumeCard,
  ResumeCardColor,
  ResumeCardItem,
} from "components/ui/resume-card";

const SPACING = 4;
function App() {
  return (
    <>
      <ThemeProvider>
        <Root>
          <Profile sx={{ mb: SPACING }} />
          <Grid2 container spacing={SPACING}>
            <Column>
              <ResumeCard
                radius={{ topLeft: true, bottomRight: true }}
                title="Experience"
                color={ResumeCardColor.LILAC}
              >
                <ResumeCardItem>
                  <ExperienceItem>
                    <Typography component="pre">
                      {"Jan, 2020 - present \n Weblite"}
                    </Typography>
                    <ExperienceItemDesc>Front end developer</ExperienceItemDesc>
                  </ExperienceItem>
                </ResumeCardItem>
              </ResumeCard>
            </Column>
            <Column>
              <ResumeCard
                radius={{ bottomRight: true }}
                sx={{ backgroundColor: "#fcede1" }}
                title="Skills"
                color={ResumeCardColor.CREAM}
              >
                <ResumeCardItem
                  sx={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  <SkillsChips
                    skills={[
                      "Typescript",
                      "WebSocket",
                      "ReactJS",
                      "Mui-Material",
                      "NextJS",
                      "CSS/SCSS",
                    ]}
                  />
                </ResumeCardItem>
              </ResumeCard>
            </Column>

            <Column size={{ xs: 12, sm: 12 }}>
              <ResumeCard
                radius={{
                  topRight: true,
                  bottomLeft: true,
                }}
                color={ResumeCardColor.LILAC}
                title="Projects"
              >
                {projects.map((project) => (
                  <ProjectsResumeCardContent
                    {...project}
                    key={
                      typeof project.name === "string"
                        ? project.name
                        : project.name.value
                    }
                  />
                ))}
              </ResumeCard>
            </Column>

            <Grid2 container size={{ xs: 12 }} rowGap={SPACING}>
              <ResumeCard
                color={ResumeCardColor.CREAM}
                radius={{ topLeft: true }}
                title="Education"
              >
                <ResumeCardItem>
                  <Typography>2017 - 2021</Typography>
                  <Typography fontWeight="bold">
                    Bachelor's Degree Computer Engineering
                  </Typography>
                  <Typography>Tehran University</Typography>
                </ResumeCardItem>
              </ResumeCard>

              <ResumeCard
                title="Language"
                color={ResumeCardColor.LILAC}
                radius={{ bottomRight: true }}
              >
                <ResumeCardItem>
                  <Typography>English</Typography>
                  <Typography>Persian</Typography>
                </ResumeCardItem>
              </ResumeCard>

              <ResumeCard
                color={ResumeCardColor.LILAC}
                radius={{ bottomLeft: true }}
                title="Contact"
              >
                {/* <ResumeCardItem>
                  <Typography fontWeight="bold">Phone</Typography>
                  <Typography>JAVAD_PHONE</Typography>
                </ResumeCardItem> */}
                <ResumeCardItem>
                  <Typography fontWeight="bold">Email</Typography>
                  <Typography>vahedi.r46@gmail.com</Typography>
                </ResumeCardItem>
                <ResumeCardItem>
                  <Typography fontWeight="bold">Address</Typography>
                  <Typography>Tehran, Iran</Typography>
                </ResumeCardItem>
              </ResumeCard>
            </Grid2>
          </Grid2>
        </Root>
      </ThemeProvider>
    </>
  );
}

export default App;

const Root = styled("div")`
  padding: ${({ theme }) => theme.spacing(2)};
`;

const Column = (props: Grid2Props) => {
  return (
    <Grid2
      size={{ xs: 12, sm: 6 }}
      container
      alignItems="center"
      direction="column"
      rowGap={SPACING}
      {...props}
    />
  );
};

const ExperienceItem = (props: Grid2Props) => {
  return (
    <Grid2
      flexWrap="wrap"
      container
      columnGap={2}
      alignItems="flex-start"
      {...props}
    />
  );
};

const ExperienceItemDesc = styled(Typography)`
  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    max-width: 110px;
  }
  font-weight: bold;
`;

const SkillsChips = ({ skills }: { skills: string[] }) => {
  return (
    <>
      {skills.map((skill) => (
        <Chip key={skill} label={skill} variant="outlined" />
      ))}
    </>
  );
};

interface Project {
  name: string | { href: string; value: string };
  company: string | { href: string; value: string };
  desc?: string;
  image?: {
    src: string;
    width: number;
    height: number;
  };
}
const projects: Project[] = [
  {
    name: { value: "Weblite - ReactJs", href: "https://weblite.me" },
    company: "Tosee Ertebatate Asre Rosha",
    desc: "A specialized platform for conducting educational courses on a messaging platform.",
  },
  {
    name: "Comunication Services",
    company: "Tosee Ertebatate Asre Rosha",
    desc: "Platforms designed for one-on-one calls, group meetings, live classes, webinars, and more. These apps offer advanced features such as video sharing, screen sharing, audio streaming, and file sharing to enhance collaboration and interaction.",
  },
  {
    name: "General exam",
    company: "Tosee Ertebatate Asre Rosha",
    desc: "Conducting multiple-choice and descriptive exams. Viewing the answer sheet after completing the exam and automatically calculating students' scores.",
    image: {
      src: "./images/general-exam.jpeg",
      width: 146,
      height: 260,
    },
  },
];
const ProjectsResumeCardContent = ({ name, company, desc, image }: Project) => {
  return (
    <ResumeCardItem>
      <Typography
        fontWeight="bold"
        href={typeof name === "string" ? undefined : name.href}
      >
        {typeof name === "string" ? name : name.value}
      </Typography>
      <Typography
        mb={desc ? 0.5 : 0}
        variant="body2"
        href={typeof company === "string" ? undefined : company.href}
      >
        {typeof company === "string" ? company : company.value}
      </Typography>
      {image && (
        <ProjectImage
          src={image.src}
          alt={typeof name === "string" ? name : name.value}
          sx={{
            width: `${image.width}px`,
            height: `${image.height}px`,
          }}
        />
      )}
      {desc && <Typography>{desc}</Typography>}
    </ResumeCardItem>
  );
};

const ProjectImage = styled("img")`
  margin-left: 30px;
  border-radius: 8px;
  margin-top: 4px;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    align-self: center;
    margin-left: 0;
  }
`;
