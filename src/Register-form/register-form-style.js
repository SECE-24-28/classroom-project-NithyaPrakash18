import styled from "styled-components";

export const RegisterFormStyle = styled.div`

  /* OUTER WRAPPER */
  .form-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    margin: 20px 0;
    font-size: 35px;
    font-weight: 600;
    text-align: center;
  }

  .highlight {
    color: red;
  }

  /* FORM CONTAINER BOX */
  .form-box {
    width: 90%;
    max-width: 950px;
    background: #f5f5f5;
    padding: 35px;
    border-radius: 14px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.10);
  }

  /* FLEX ROW SYSTEM */
  .row {
    display: flex;
    gap: 22px;
    margin-bottom: 20px;
  }

  /* INPUT FIELDS */
  .field {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 14px;
    margin-bottom: 6px;
    color: #333;
  }

  input,
  select {
    height: 42px;
    border-radius: 6px;
    border: 1px solid #c9c9c9;
    padding: 0 12px;
    font-size: 14px;
    background: white;
  }

  /* MOBILE INPUT */
  .mobile-box {
    display: flex;
    gap: 10px;
  }

  /* PASSWORD BOX */
  .password-box {
    display: flex;
    align-items: center;
    border: 1px solid #c9c9c9;
    background: white;
    border-radius: 6px;
  }

  .password-box input {
    flex: 1;
    height: 42px;
    border: none;
    padding-left: 10px;
    font-size: 14px;
  }

  .password-box span {
    padding: 0 12px;
    cursor: pointer;
    color: #0066ff;
    font-size: 13px;
    font-weight: 500;
  }

  /* PASSWORD RULES */
  .password-rules {
    margin-top: 5px;
    padding-left: 18px;
    font-size: 14px;
    line-height: 1.5;
    color: #666;
  }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .row {
      flex-direction: column;
      gap: 10px;
    }

    .form-box {
      padding: 20px;
    }

    .title {
      font-size: 28px;
    }
      .submit-btn {
  width: 180px;
  height: 45px;
  background: #4f46e5;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
}

.submit-btn:hover {
  background: #4338ca;
}
  }
`;