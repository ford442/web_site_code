import os;
import sys;
import time;
import numba;
from numba import jit;
import cv2;
import numpy as np;
import pathlib
import shutil
python3 -m pip install --upgrade pip jedi
python3 -m pip install --upgrade setuptools mypy

sudo mkdir /content/RAMDRIVE
sudo chmod 0777 /content/RAMDRIVE
sudo mount -t ramfs -o size=2048M ramfs /content/RAMDRIVE
time.sleep(0.2);
sys.path.append('/content/RAMDRIVE/');
wget https://1ink.us/input.png -o /content/RAMDRIVE
python3 -m pip uninstall setuptools -y
python3 -m pip install 'setuptools<60'
python3 -m pip install methodtools
python3 -m pip install ez_setup
python3 -m pip install numba tbb
python3 -m pip install -U setuptools
python3 -m pip install imageio imageio-ffmpeg pyspng wandb pandas opencv-contrib-python matplotlib futures==3.1.1 pillow colorama iopath fvcore
python3 -m pip install https://files.pythonhosted.org/packages/69/f5/7284341477c9d8c08250d83071999841d0af5940208c5167a82de2744dd4/cupy_cuda11x-11.2.0-cp37-cp37m-manylinux1_x86_64.whl
python3 -m pip install flatbuffers blobfile tbb Cython optuna intel-openmp mkl python-utils icc_rt cffi chainer regex tqdm utils
!git clone -l -s https://github.com/ford442/waifu2x-chainer.git /content/RAMDRIVE/waifu2x-chainer

os.environ['PYTHONDONTWRITEBYTECODE']='0';
os.environ['PYTHONUNBUFFERED']='1';
os.environ['MXNET_ENGINE_TYPE']='1'
os.environ["KMP_SETTINGS"]='1'
from numba import config, threading_layer
config.THREADING_LAYER='tbb'
os.environ['NUMBA_NUM_THREADS']='16';
os.environ['KMP_BLOCKTIME']='1';
os.environ['KMP_DEVICE_THREAD_LIMIT']='16';
os.environ['LD_PRELOAD']='/usr/local/lib/libiomp5.so';
os.environ['OMP_SCHEDULE']='STATIC';
os.environ['OMP_PROC_BIND']='CLOSE';
os.environ['KMP_AFFINITY']='granularity=fine,compact,1,0'
os.environ['OMP_NUM_THREADS']='16';
os.environ['KMP_LIBRARY']='turnaround';
os.environ['KMP_STACKSIZE']='4M';
os.environ['OMP_STACKSIZE']='4M';
os.environ['NUMBA_CACHE_DIR']='/content/RAMDRIVE';

!mkdir /content/RAMDRIVE/tmp
!chmod 0777 /content/RAMDRIVE/tmp
%cd  /content/RAMDRIVE/waifu2x-chainer

kernel=np.array([[0,-1,0],[-1,5,-1],[0,-1,0]]);

@jit(parallel=True,fastmath=True,cache=True,forceobj=True)
def dbl():
    !python3 /content/RAMDRIVE/waifu2x-chainer/waifu2x.py -g -1 -b 1 -e 'png' -m 'scale' -t -T 2 -s 2.0 -c 'rgb' -a 3 -i "/content/RAMDRIVE/tmp/indbl.png" -o "/content/RAMDRIVE/tmp/dbl.png"

@jit(parallel=True,fastmath=True,cache=True,forceobj=True)
def hlf():
    !python3 /content/RAMDRIVE/waifu2x-chainer/waifu2x.py -g -1 -b 1 -e 'png' -m 'scale' -t -T 2 -s 0.5 -c 'rgb' -a 3 -i "/content/RAMDRIVE/tmp/inhlf.png" -o "/content/RAMDRIVE/tmp/hlf.png"

def bigsmall(image,image_out):
  !sudo rm /content/RAMDRIVE/tmp/*
  !cp {image} /content/RAMDRIVE/tmp/indbl.png
  dbl();
  img=cv2.imread("/content/RAMDRIVE/tmp/dbl.png",flags=cv2.IMREAD_COLOR);
  image_sharp=cv2.filter2D(src=img,ddepth=-1,kernel=kernel);
  !sudo rm /content/RAMDRIVE/tmp/indbl.png
  cv2.imwrite("/content/RAMDRIVE/tmp/indbl.png",image_sharp);
  !sudo rm /content/RAMDRIVE/tmp/dbl.png
  dbl();
  imga=cv2.imread("/content/RAMDRIVE/tmp/dbl.png",flags=cv2.IMREAD_COLOR);
  image_sharpa=cv2.filter2D(src=imga,ddepth=-1,kernel=kernel);
  cv2.imwrite("/content/RAMDRIVE/tmp/indbl.png",image_sharpa);
  !sudo rm /content/RAMDRIVE/tmp/dbl.png
  dbl();
  img2a=cv2.imread("/content/RAMDRIVE/tmp/dbl.png",flags=cv2.IMREAD_COLOR);
  gaussian_blur2aa = cv2.GaussianBlur(img2a,(5,5),sigmaX=0);
  !sudo rm /content/RAMDRIVE/tmp/indbl.png
  cv2.imwrite("/content/RAMDRIVE/tmp/indbl.png",gaussian_blur2aa);
  !sudo rm /content/RAMDRIVE/tmp/dbl.png
  dbl();
  img4aa=cv2.imread("/content/RAMDRIVE/tmp/dbl.png",flags=cv2.IMREAD_COLOR);
  gaussian_blur2a = cv2.GaussianBlur(img4aa,(5,5),sigmaX=0);
  cv2.imwrite("/content/RAMDRIVE/tmp/inhlf.png",gaussian_blur2a);
  hlf();
  img4g=cv2.imread("/content/RAMDRIVE/tmp/hlf.png",flags=cv2.IMREAD_COLOR);
  gaussian_blur2a2 = cv2.GaussianBlur(img4g,(5,5),sigmaX=0);
  !sudo rm /content/RAMDRIVE/tmp/inhlf.png
  cv2.imwrite("/content/RAMDRIVE/tmp/inhlf.png",gaussian_blur2a2);
  !sudo rm /content/RAMDRIVE/tmp/hlf.png
  hlf();
  img4ga=cv2.imread("/content/RAMDRIVE/tmp/hlf.png",flags=cv2.IMREAD_COLOR);
  cv2.imwrite(image_out,img4ga);

kernel=np.array([[0,-1,0],[-1,5,-1],[0,-1,0]]);

image=str(f'/content/RAMDRIVE/{image_name}');
image_out=str(f'/content/RAMDRIVE/{image_name}-passAj.png');
bigsmall(image,image_out);
image=str(f'/content/RAMDRIVE/{image_name}-passAja.png');
image_out=str(f'/content/RAMDRIVE/{image_name}-passBja.png');
bigsmall(image,image_out);
image=str(f'/content/RAMDRIVE/{image_name}-passBja.png');
image_out=str(f'/content/RAMDRIVE/{image_name}-passCja.png');
bigsmall(image,image_out);
image=str(f'/content/RAMDRIVE/{image_name}-passCja.png');
image_out=str(f'/content/RAMDRIVE/{image_name}-passDja.png');
bigsmall(image,image_out);
image=str(f'/content/RAMDRIVE/{image_name}-passDja.png');
image_out=str(f'/content/RAMDRIVE/{image_name}-passEja.png');
bigsmall(image,image_out);
