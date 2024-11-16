import styled from "styled-components";

// General styling
export const Body = styled.div`
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
`;

export const TableContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow-x: auto;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

// About section styling
export const AboutSection = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  color: #333;
`;

// Breadcrumb styling
export const Breadcrumb = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  text-align: left !important;

  a {
    color: #666;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Department header styling
export const DepartmentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const DepartmentLogo = styled.img`
  width: 60px; /* Adjust as needed */
  height: auto;
  margin-right: 15px;
`;

export const DepartmentTitle = styled.h2`
  font-size: 28px;
  color: #1c2b78;
  font-weight: bold;
`;

// Department description styling
export const DepartmentDescription = styled.p`
  text-align: justify;
  line-height: 1.6;
  color: #333;
  font-size: 16px;

  strong {
    font-weight: bold;
  }
`;

// Table styling
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 12px;
    text-align: left;
    border: 1px solid #ddd;
  }

  th {
    background-color: #004080;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
  }

  tr:nth-child(even) {
    background-color: #f3f6f9;
  }

  tr:hover {
    background-color: #e9eef5;
  }

  td a {
    color: #1c2b78;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;

    th,
    td {
      font-size: 14px;
      padding: 10px;
      white-space: normal;
    }
  }
`;
