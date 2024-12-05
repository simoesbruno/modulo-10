import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Grid, Card, CardHeader, CardContent, CardActions, Button, TextField, FormHelperText } from '@mui/material';

// Componente CriarTarefa
const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  useEffect(() => {
    let proximoId = Math.max(...tarefas.map(tarefa => tarefa.idTarefa)) + 1;
    setIdTarefa(proximoId);
  }, [tarefas]);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleSalvar = () => {
    setTarefas([
      ...tarefas,
      {
        idTarefa,
        tituloTarefa,
        descricaoTarefa,
        inicioTarefa,
        fimTarefa,
        recursoTarefa,
        statusTarefa
      }
    ]);
    handleClose();
  };

  return (
    <Grid container spacing={2}>
      <Card sx={styles.cardStyle}>
        <CardHeader title="Tarefas" subheader="Cadastro de Tarefas" />
        <CardContent sx={{ width: '100%' }}>
          <Grid item xs={12}>
            <TextField
              label="Título da Tarefa"
              variant="outlined"
              fullWidth
              value={tituloTarefa}
              onChange={e => setTituloTarefa(e.target.value)}
              sx={styles.inputStyle}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Descrição da Tarefa"
              variant="outlined"
              fullWidth
              value={descricaoTarefa}
              onChange={e => setDescricaoTarefa(e.target.value)}
              sx={styles.inputStyle}
            />
          </Grid>
          <Grid container spacing={5} mt={3}>
            <Grid item xs={4}>
              <TextField
                label="Início da Tarefa"
                size='medium'
                type="date"
                variant="outlined"
                fullWidth
                value={inicioTarefa}
                onChange={e => setInicioTarefa(e.target.value)}
                sx={styles.inputStyle}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Fim da Tarefa"
                size='medium'
                type="date"
                variant="outlined"
                fullWidth
                value={fimTarefa}
                onChange={e => setFimTarefa(e.target.value)}
                sx={styles.inputStyle}
              />
            </Grid>
            <Grid item xs={5}>
              <FormControl fullWidth>
                <InputLabel>Recurso</InputLabel>
                <Select
                  value={recursoTarefa}
                  onChange={handleRecurso}
                  label="Recurso"
                  size="small"
                  sx={styles.selectStyle}
                >
                  <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
                  <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                  <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={5}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={statusTarefa}
                  onChange={handleStatus}
                  label="Status"
                  size="small"
                  sx={styles.selectStyle}
                >
                  <MenuItem value={'Aguardando'}>Aguardando</MenuItem>
                  <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                  <MenuItem value={'Concluída'}>Concluída</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={5} mt={5}>
            <Grid item xs={6}>
              <Button size="small" variant="contained" onClick={handleSalvar}>Salvar</Button>
            </Grid>
            <Grid item xs={6}>
              <Button size="small" variant="outlined" onClick={handleClose}>Cancelar</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

const styles = {
  cardStyle: {
    margin: '20px auto',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: 900, // Ajuste para o cartão não ocupar a tela inteira
  },
  inputStyle: {
    marginBottom: '10px',
    width: '100%', // Garante que os inputs ocupem toda a largura
  },
  selectStyle: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: 400,
  }
};

export default CriarTarefa;
