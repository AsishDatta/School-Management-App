import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <img src={Students} alt="students" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            Welcome to
                            <br />
                            School Management
                            <br />
                            App
                        </StyledTitle>
                        <StyledText>
                            Streamline school management, class organization, and add students and faculty.
                            Seamlessly track attendance, assess performance, and provide feedback.
                            Access records, view marks, and communicate effortlessly.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <LightPurpleButton variant="contained" fullWidth sx={{ padding: '14px', fontSize: '16px', fontWeight: '600', background: 'linear-gradient(45deg, #7f56da, #9c6fff)', '&:hover': { background: '#7f56da' } }}>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da", fontSize: '16px', fontWeight: '600', padding: '14px', '&:hover': { backgroundColor: '#f2e1f7' } }}>
                                    Login as Guest
                                </Button>
                            </StyledLink>
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{ color: "#550080", fontWeight: '600' }}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;  /* Light grey background */
`;

const StyledPaper = styled.div`
  padding: 40px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  text-align: center;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-top: 20px;
`;

const StyledTitle = styled.h1`
  font-size: 2.6rem;
  color: #333;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 1.2px;
`;

const StyledText = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

