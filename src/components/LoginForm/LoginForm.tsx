import { Box, Button, Container } from "@mui/material";
import { StyledInput } from "../Input/Inputs";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface LoginForm {
  enrollment: string;
  password: string;
}

export const LoginForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<LoginForm>();
  const { errors } = formState;

  const handleLogin = async (data: LoginForm) => {
    try {
      console.log(data);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit(handleLogin)}>
        <Box display="flex" flexDirection="column" gap={2}>
          <StyledInput
            label="Matricula"
            variant="outlined"
            {...register("enrollment", {
              required: "Informe um número de matrícula válido",
              pattern: {
                value: /\d/,
                message: "Matricula contem apenas valores numericos",
              },
            })}
            error={!!errors?.enrollment}
            helperText={errors?.enrollment?.message}
          />
          <StyledInput
            label="Senha"
            variant="outlined"
            type="password"
            {...register("password", {
              required: "Informe sua senha",
            })}
            error={!!errors?.password}
            helperText={errors?.password?.message}
          />
          <Button variant="contained" type="submit">
            Entrar
          </Button>
        </Box>
      </form>
    </Container>
  );
};
