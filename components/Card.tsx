"use client";

import styles from "../styles/Card.module.css";
import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "red",
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function Card() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.main}>
      {open ? (
        <div className="absolute bg-gray">
          <BootstrapDialog
            PaperProps={{
              style: {
                width: "30rem",
                background: "#1B2C50",
                color: "white",
                textAlign: "center",
                padding: ".6rem",
                borderRadius: "1rem",
              },
            }}
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              REAL MADRID - BARCELONA
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>PREDICTING FOR: 2</Typography>
              <Typography gutterBottom>BARCELONA WIN</Typography>
            </DialogContent>
            <DialogContent
              sx={{
                textAlign: "left",
              }}
            >
              <Typography>AMOUNT :</Typography>
              <TextField
                id="name"
                type="number"
                fullWidth
                inputProps={{
                  style: {
                    background: "#4F5D65",
                    color: "white",
                    borderRadius: ".4rem",
                  },
                }}
              />
            </DialogContent>
            <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={handleClose}
                sx={{
                  background: "#5F1F1A",
                  color: "white",
                  textAlign: "center",
                  alignSelf: "center",
                  "&:hover": {
                    background: "#793C38",
                  },
                }}
              >
                CONFIRM
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
      <div className={styles.sports}>
        <button className="flex items-center justify-center gap-2 p-2 rounded-3xl hover:bg-sky-700">
          <img src="/soccer.svg" className="w-6"></img>Soccer
        </button>
        <button className="flex items-center justify-center gap-2 p-2 rounded-3xl hover:bg-sky-700">
          <img src="/basketball.svg" className="w-6"></img>Basketball
        </button>
      </div>
      <div className={styles.importantGames}>
        <div className={styles.card}>
          <div className="w-full justify-between flex items-center px-1">
            <div className="flex flex-col">
              <img
                src="./RealMadrid.svg"
                alt="Real Madrid"
                className="w-6"
              ></img>
            </div>
            <h1>78'</h1>
            <div className="flex flex-col">
              <img src="./Barcelona.svg" alt="Barcelona" className="w-6"></img>
            </div>
          </div>
          <div className="flex w-full justify-between px-3">
            <h2>2</h2>
            <h2>4</h2>
          </div>
          <div className="w-full flex gap-2">
            <button className={styles.odds}>
              <p>1&nbsp;</p>
              <p className="text-yellow-300">3.55</p>
            </button>
            <button className={styles.odds}>
              <p>X&nbsp;</p>
              <p className="text-yellow-300">2.40</p>
            </button>
            <button className={styles.odds} onClick={handleClickOpen}>
              <p>2&nbsp;</p>
              <p className="text-yellow-300">1.75</p>
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className="w-full justify-between flex items-center px-1">
            <div className="flex flex-col">
              <img
                src="./RealMadrid.svg"
                alt="Real Madrid"
                className="w-6"
              ></img>
            </div>
            <h1>78'</h1>
            <div className="flex flex-col">
              <img src="./Barcelona.svg" alt="Barcelona" className="w-6"></img>
            </div>
          </div>
          <div className="flex w-full justify-between px-3">
            <h2>2</h2>
            <h2>4</h2>
          </div>
          <div className="w-full flex gap-2">
            <button className={styles.odds}>
              <p>1&nbsp;</p>
              <p className="text-yellow-300">3.55</p>
            </button>
            <button className={styles.odds}>
              <p>X&nbsp;</p>
              <p className="text-yellow-300">2.40</p>
            </button>
            <button className={styles.odds}>
              <p>2&nbsp;</p>
              <p className="text-yellow-300">1.75</p>
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className="w-full justify-between flex items-center px-1">
            <div className="flex flex-col">
              <img
                src="./RealMadrid.svg"
                alt="Real Madrid"
                className="w-6"
              ></img>
            </div>
            <h1>78'</h1>
            <div className="flex flex-col">
              <img src="./Barcelona.svg" alt="Barcelona" className="w-6"></img>
            </div>
          </div>
          <div className="flex w-full justify-between px-3">
            <h2>2</h2>
            <h2>4</h2>
          </div>
          <div className="w-full flex gap-2">
            <button className={styles.odds}>
              <p>1&nbsp;</p>
              <p className="text-yellow-300">3.55</p>
            </button>
            <button className={styles.odds}>
              <p>X&nbsp;</p>
              <p className="text-yellow-300">2.40</p>
            </button>
            <button className={styles.odds}>
              <p>2&nbsp;</p>
              <p className="text-yellow-300">1.75</p>
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className="w-full justify-between flex items-center px-1">
            <div className="flex flex-col">
              <img
                src="./RealMadrid.svg"
                alt="Real Madrid"
                className="w-6"
              ></img>
            </div>
            <h1>78'</h1>
            <div className="flex flex-col">
              <img src="./Barcelona.svg" alt="Barcelona" className="w-6"></img>
            </div>
          </div>
          <div className="flex w-full justify-between px-3">
            <h2>2</h2>
            <h2>4</h2>
          </div>
          <div className="w-full flex gap-2">
            <button className={styles.odds}>
              <p>1&nbsp;</p>
              <p className="text-yellow-300">3.55</p>
            </button>
            <button className={styles.odds}>
              <p>X&nbsp;</p>
              <p className="text-yellow-300">2.40</p>
            </button>
            <button className={styles.odds}>
              <p>2&nbsp;</p>
              <p className="text-yellow-300">1.75</p>
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className="w-full justify-between flex items-center px-1">
            <div className="flex flex-col">
              <img
                src="./RealMadrid.svg"
                alt="Real Madrid"
                className="w-6"
              ></img>
            </div>
            <h1>78'</h1>
            <div className="flex flex-col">
              <img src="./Barcelona.svg" alt="Barcelona" className="w-6"></img>
            </div>
          </div>
          <div className="flex w-full justify-between px-3">
            <h2>2</h2>
            <h2>4</h2>
          </div>
          <div className="w-full flex gap-2">
            <button className={styles.odds}>
              <p>1&nbsp;</p>
              <p className="text-yellow-300">3.55</p>
            </button>
            <button className={styles.odds}>
              <p>X&nbsp;</p>
              <p className="text-yellow-300">2.40</p>
            </button>
            <button className={styles.odds}>
              <p>2&nbsp;</p>
              <p className="text-yellow-300">1.75</p>
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className="w-full justify-between flex items-center px-1">
            <div className="flex flex-col">
              <img
                src="./RealMadrid.svg"
                alt="Real Madrid"
                className="w-6"
              ></img>
            </div>
            <h1>78'</h1>
            <div className="flex flex-col">
              <img src="./Barcelona.svg" alt="Barcelona" className="w-6"></img>
            </div>
          </div>
          <div className="flex w-full justify-between px-3">
            <h2>2</h2>
            <h2>4</h2>
          </div>
          <div className="w-full flex gap-2">
            <button className={styles.odds}>
              <p>1&nbsp;</p>
              <p className="text-yellow-300">3.55</p>
            </button>
            <button className={styles.odds}>
              <p>X&nbsp;</p>
              <p className="text-yellow-300">2.40</p>
            </button>
            <button className={styles.odds}>
              <p>2&nbsp;</p>
              <p className="text-yellow-300">1.75</p>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.bets}>
        <table>
          <tr>
            <th>TEAMS</th>
            <th className="w-20">1</th>
            <th className="w-20">X</th>
            <th className="w-20">2</th>
            <th className="w-4/12">LIQUIDITY</th>
          </tr>
          <tr>
            <td>
              <div className="flex justify-around items-center py-2">
                <div className="flex flex-col self-end items-center gap-1 max-w-max break-all">
                  <img
                    src="/RealMadrid.svg"
                    alt="Real Madrid"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold text-sm">REAL MADRID</h2>
                </div>
                <div className="h-full flex flex-col items-center text-center font-semibold">
                  <h1 className="text-2xl">1 : 3</h1>
                  <small>60'</small>
                </div>
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/Barcelona.svg"
                    alt="Barcelona"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold text-sm">BARCELONA</h2>
                </div>
              </div>
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              4.10
            </td>

            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              3.20
            </td>
            <td
              className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer"
              onClick={handleClickOpen}
            >
              1.90
            </td>
            <td>
              <img src="/Solana.svg" alt="SOL" className="w-6 inline-flex" />
              5900.39 / $ 113.404,1504
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-around items-center py-2">
                <div className="flex flex-col self-end items-center gap-1 max-w-max break-all">
                  <img
                    src="/RealMadrid.svg"
                    alt="Real Madrid"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold text-sm">REAL MADRID</h2>
                </div>
                <div className="h-full flex flex-col items-center text-center font-semibold">
                  <h1 className="text-2xl">1 : 3</h1>
                  <small>60'</small>
                </div>
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/Barcelona.svg"
                    alt="Barcelona"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold text-sm">BARCELONA</h2>
                </div>
              </div>
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              4.10
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              3.20
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              1.90
            </td>
            <td>
              <img src="/Solana.svg" alt="SOL" className="w-6 inline-flex" />
              5900.39 / $ 113.404,1504
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-around items-center py-2">
                <div className="flex flex-col self-end items-center gap-1 max-w-max break-all">
                  <img
                    src="/RealMadrid.svg"
                    alt="Real Madrid"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold text-sm">REAL MADRID</h2>
                </div>
                <div className="h-full flex flex-col items-center text-center font-semibold">
                  <h1 className="text-2xl">1 : 3</h1>
                  <small>60'</small>
                </div>
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/Barcelona.svg"
                    alt="Barcelona"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold text-sm">BARCELONA</h2>
                </div>
              </div>
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              4.10
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              3.20
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              1.90
            </td>
            <td>
              <img src="/Solana.svg" alt="SOL" className="w-6 inline-flex" />
              5900.39 / $ 113.404,1504
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-around items-center py-2">
                <div className="flex flex-col self-end items-center gap-1 max-w-max break-all">
                  <img
                    src="/RealMadrid.svg"
                    alt="Real Madrid"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold text-sm">REAL MADRID</h2>
                </div>
                <div className="h-full flex flex-col items-center text-center font-semibold">
                  <h1 className="text-2xl">1 : 3</h1>
                  <small>60'</small>
                </div>
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/Barcelona.svg"
                    alt="Barcelona"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold text-sm">BARCELONA</h2>
                </div>
              </div>
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              4.10
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              3.20
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              1.90
            </td>
            <td>
              <img src="/Solana.svg" alt="SOL" className="w-6 inline-flex" />
              5900.39 / $ 113.404,1504
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-around items-center py-2">
                <div className="flex flex-col self-end items-center gap-1 max-w-max break-all">
                  <img
                    src="/RealMadrid.svg"
                    alt="Real Madrid"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold text-sm">REAL MADRID</h2>
                </div>
                <div className="h-full flex flex-col items-center text-center font-semibold">
                  <h1 className="text-2xl">1 : 3</h1>
                  <small>60'</small>
                </div>
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/Barcelona.svg"
                    alt="Barcelona"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold text-sm">BARCELONA</h2>
                </div>
              </div>
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              4.10
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              3.20
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              1.90
            </td>
            <td>
              <img src="/Solana.svg" alt="SOL" className="w-6 inline-flex" />
              5900.39 / $ 113.404,1504
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-around items-center py-2">
                <div className="flex flex-col self-end items-center gap-1 max-w-max break-all">
                  <img
                    src="/RealMadrid.svg"
                    alt="Real Madrid"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold text-sm">REAL MADRID</h2>
                </div>
                <div className="h-full flex flex-col items-center text-center font-semibold">
                  <h1 className="text-2xl">1 : 3</h1>
                  <small>60'</small>
                </div>
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/Barcelona.svg"
                    alt="Barcelona"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold text-sm">BARCELONA</h2>
                </div>
              </div>
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              4.10
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              3.20
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              1.90
            </td>
            <td>
              <img src="/Solana.svg" alt="SOL" className="w-6 inline-flex" />
              5900.39 / $ 113.404,1504
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-around items-center py-2">
                <div className="flex flex-col self-end items-center gap-1 max-w-max break-all">
                  <img
                    src="/RealMadrid.svg"
                    alt="Real Madrid"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold text-sm">REAL MADRID</h2>
                </div>
                <div className="h-full flex flex-col items-center text-center font-semibold">
                  <h1 className="text-2xl">1 : 3</h1>
                  <small>60'</small>
                </div>
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/Barcelona.svg"
                    alt="Barcelona"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold text-sm">BARCELONA</h2>
                </div>
              </div>
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              4.10
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              3.20
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              1.90
            </td>
            <td>
              <img src="/Solana.svg" alt="SOL" className="w-6 inline-flex" />
              5900.39 / $ 113.404,1504
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-around items-center py-2">
                <div className="flex flex-col self-end items-center gap-1 max-w-max break-all">
                  <img
                    src="/RealMadrid.svg"
                    alt="Real Madrid"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold text-sm">REAL MADRID</h2>
                </div>
                <div className="h-full flex flex-col items-center text-center font-semibold">
                  <h1 className="text-2xl">1 : 3</h1>
                  <small>60'</small>
                </div>
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/Barcelona.svg"
                    alt="Barcelona"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold text-sm">BARCELONA</h2>
                </div>
              </div>
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              4.10
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              3.20
            </td>
            <td className="text-yellow-300 font-semibold hover:bg-gray-500 cursor-pointer">
              1.90
            </td>
            <td>
              <img src="/Solana.svg" alt="SOL" className="w-6 inline-flex" />
              5900.39 / $ 113.404,1504
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
