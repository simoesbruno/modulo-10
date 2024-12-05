import React, { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Card, CardHeader, CardContent, CardActions,
  Button, Modal, Box
} from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import CriarTarefa from './CriarTarefa';
import EditarTarefa from './EditarTarefa';

// Função para criar tarefas
function createData(idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, statusTarefa, recursoTarefa) {
  return { idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, statusTarefa, recursoTarefa };
}

// Array inicial de tarefas
const initialRows = [
  createData(1, 'Tarefa 1', 'Descrição da Tarefa 1', '2022-01-01', '2022-01-02', 'Concluída', 'Recurso 1'),
  createData(2, 'Tarefa 2', 'Descrição da Tarefa 2', '2022-01-03', '2022-01-04', 'Em Andamento', 'Recurso 2'),
  createData(3, 'Tarefa 3', 'Descrição da Tarefa 3', '2022-01-04', '2022-01-05', 'Em Andamento', 'Recurso 3'),
  createData(4, 'Tarefa 4', 'Descrição da Tarefa 4', '2022-01-05', '2022-01-06', 'Em Andamento', 'Recurso 1'),
  createData(5, 'Tarefa 5', 'Descrição da Tarefa 5', '2022-01-06', '2022-01-07', 'Em Andamento', 'Recurso 2'),
  createData(6, 'Tarefa 6', 'Descrição da Tarefa 6', '2022-01-07', '2022-01-08', 'Aguardando', 'Recurso 3'),
];

const styles = {
  modalStyle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'white',
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
  },
  tableHeader: {
    backgroundColor: '#f5f5f5',
    fontWeight: 'bold',
  },
  tableRow: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#f9f9f9',
    },
  },
  cardStyle: {
    margin: '20px auto',
    padding: '10px',
    borderRadius: '8px',
    maxWidth: 800,
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
  },
};

const ListarTarefa = () => {
  const [open, setOpen] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState();
  const [idTarefaSelecionada, setIdTarefaSelecionada] = useState([]);

  useEffect(() => {
    setTarefas(initialRows);
  }, []);

  const handleEditar = (id) => {
    const tarefaParaEditar = tarefas.find((obj) => obj.idTarefa === id);
    setTarefa(tarefaParaEditar);
    setIdTarefaSelecionada(id);
    setOpenEditar(true);
  };

  const handleDeletar = (id) => {
    setTarefas((current) => current.filter((tarefa) => tarefa.idTarefa !== id));
  };

  return (
    <>
      <Card sx={styles.cardStyle}>
  <CardHeader title="Tarefas" subheader="Listagem de Tarefas" />
  <CardContent>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={styles.tableHeader}>#</TableCell>
            <TableCell sx={styles.tableHeader}>Título</TableCell>
            <TableCell sx={styles.tableHeader} align="right">Descrição</TableCell>
            <TableCell sx={styles.tableHeader} align="right">Data de Início</TableCell>
            <TableCell sx={styles.tableHeader} align="right">Data de Finalização</TableCell>
            <TableCell sx={styles.tableHeader} align="right">Status</TableCell>
            <TableCell sx={styles.tableHeader} align="right">Recurso</TableCell>
            <TableCell sx={styles.tableHeader} align="center">Editar</TableCell>
            <TableCell sx={styles.tableHeader} align="center">Deletar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tarefas.map((row, indice) => (
            <TableRow key={indice} sx={styles.tableRow}>
              <TableCell>{row.idTarefa}</TableCell>
              <TableCell>{row.tituloTarefa}</TableCell>
              <TableCell align="right">{row.descricaoTarefa}</TableCell>
              <TableCell align="right">{row.inicioTarefa}</TableCell>
              <TableCell align="right">{row.fimTarefa}</TableCell>
              <TableCell align="right">{row.statusTarefa}</TableCell>
              <TableCell align="right">{row.recursoTarefa}</TableCell>
              <TableCell align="center">
                <Button variant="outlined" color="primary" onClick={() => handleEditar(row.idTarefa)}>
                  <EditIcon fontSize="small" />
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button variant="outlined" color="error" onClick={() => handleDeletar(row.idTarefa)}>
                  <DeleteIcon fontSize="small" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </CardContent>
  <CardActions sx={styles.buttonGroup}>
    <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Criar Tarefa</Button>
    <Button variant="outlined" color="secondary">Cancelar</Button>
  </CardActions>
</Card>

{/* Modal Criar Tarefa */}
<Modal open={open} onClose={() => setOpen(false)}>
  <Box sx={styles.modalStyle}>
    <CriarTarefa handleClose={() => setOpen(true)} tarefas={tarefas} setTarefas={setTarefas} />
  </Box>
</Modal>

{/* Modal Editar Tarefa */}
<Modal open={openEditar} onClose={() => setOpenEditar(false)}>
  <Box sx={styles.modalStyle}>
    <EditarTarefa handleCloseEditar={() => setOpenEditar(true)} tarefa={tarefa} tarefas={tarefas} setTarefas={setTarefas} />
  </Box>
</Modal>

    </>
  );
};

export default ListarTarefa;
