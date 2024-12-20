import { Container, Grid, Paper } from '@mui/material';
import SeeNotice from '../../components/SeeNotice';
import Students from "../../assets/img1.png";
import Classes from "../../assets/img2.png";
import Teachers from "../../assets/img3.png";
import Fees from "../../assets/img4.png";
import styled from 'styled-components';
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSclasses } from '../../redux/sclassRelated/sclassHandle';
import { getAllStudents } from '../../redux/studentRelated/studentHandle';
import { getAllTeachers } from '../../redux/teacherRelated/teacherHandle';

const AdminHomePage = () => {
    const dispatch = useDispatch();
    const { studentsList } = useSelector((state) => state.student);
    const { sclassesList } = useSelector((state) => state.sclass);
    const { teachersList } = useSelector((state) => state.teacher);

    const { currentUser } = useSelector(state => state.user);
    const adminID = currentUser._id;

    useEffect(() => {
        dispatch(getAllStudents(adminID));
        dispatch(getAllSclasses(adminID, "Sclass"));
        dispatch(getAllTeachers(adminID));
    }, [adminID, dispatch]);

    const numberOfStudents = studentsList && studentsList.length;
    const numberOfClasses = sclassesList && sclassesList.length;
    const numberOfTeachers = teachersList && teachersList.length;

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                {/* Student Card */}
                <Grid item xs={12} md={3} lg={3}>
                    <StyledPaper>
                        <StyledImage src={Students} alt="Students" />
                        <Title>Total Students</Title>
                        <Data start={0} end={numberOfStudents} duration={2.5} />
                    </StyledPaper>
                </Grid>

                {/* Classes Card */}
                <Grid item xs={12} md={3} lg={3}>
                    <StyledPaper>
                        <StyledImage src={Classes} alt="Classes" />
                        <Title>Total Classes</Title>
                        <Data start={0} end={numberOfClasses} duration={5} />
                    </StyledPaper>
                </Grid>

                {/* Teachers Card */}
                <Grid item xs={12} md={3} lg={3}>
                    <StyledPaper>
                        <StyledImage src={Teachers} alt="Teachers" />
                        <Title>Total Teachers</Title>
                        <Data start={0} end={numberOfTeachers} duration={2.5} />
                    </StyledPaper>
                </Grid>

                {/* Fees Collection Card */}
                <Grid item xs={12} md={3} lg={3}>
                    <StyledPaper>
                        <StyledImage src={Fees} alt="Fees" />
                        <Title>Fees Collection</Title>
                        <Data start={0} end={23000} duration={2.5} prefix="$" />
                    </StyledPaper>
                </Grid>

                {/* Notice Section */}
                <Grid item xs={12} md={12} lg={12}>
                    <StyledPaper>
                        <SeeNotice />
                    </StyledPaper>
                </Grid>
            </Grid>
        </Container>
    );
};

const StyledPaper = styled(Paper)`
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: 280px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-radius: 16px;
  background-color: #fafbfc;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  }
`;

const StyledImage = styled.img`
  max-width: 80%;
  height: auto;
  margin-bottom: 20px;
  filter: grayscale(40%);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%);
  }
`;

const Title = styled.p`
  font-size: 1.6rem;
  color: #2c3e50;
  font-weight: 600;
  margin: 0;
  padding: 12px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Data = styled(CountUp)`
  font-size: calc(1.8rem + 1vw);
  color: #27ae60;
  font-weight: 700;
`;

export default AdminHomePage;
