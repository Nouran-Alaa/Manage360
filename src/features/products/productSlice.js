import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProductData = createAsyncThunk(
  'data/fetchProductData',

  async (endpoint, { getState }) => {
    const state = getState();
    // Check if products have already been fetched
    if (state.product.products.length > 0) {
      return; // Don't fetch again if products are already loaded
    }
    
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data.products);
    return data.products;
  }
);
const initialState = {
  products: [],

  //Clothes
  sizes: [],

  //Laptop
  gpu: [],
  selectedGPU: null,
  cpu: [],
  selectedCPU: null,
  hardDrive: [],
  selectedHardDrive: null,
  screenSize: [],
  selectedScreenSize: null,
  ram: [],
  selectedRAM: null,

  //Mobile Phones
  storage: [],
  selectedStorage: null,
  camera: '',
  batteryCapacity: '',
  processor: '',
  mobileRAM: '',

  //All
  tags: [],
  name: '',
  brand: '',
  description: '',
  price: 0,
  discount: 0,
  stock: 0,
  colors: [],
  imageUrls: [],

  status: 'idle', // Added status
  error: null, // Added error
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    createNewProduct(state, action) {
      state.products.push(action.payload);
    },

    //Clothes
    setSizes(state, action) {
      state.sizes = action.payload;
    },
    setColors(state, action) {
      state.colors = action.payload;
    },

    //Laptop
    setCPU(state, action) {
      state.cpu = action.payload;
    },
    setSelectedCPU(state, action) {
      state.selectedCPU = action.payload;
    },

    setGPU(state, action) {
      state.gpu = action.payload;
    },
    setSelectedGPU(state, action) {
      state.selectedGPU = action.payload;
    },

    setHardDrive(state, action) {
      state.hardDrive = action.payload;
    },
    setSelectedHardDrive(state, action) {
      state.selectedHardDrive = action.payload;
    },

    setScreenSize(state, action) {
      state.screenSize = action.payload;
    },
    setSelectedScreenSize(state, action) {
      state.selectedScreenSize = action.payload;
    },

    setRAM(state, action) {
      state.ram = action.payload;
    },
    setSelectedRAM(state, action) {
      state.selectedRAM = action.payload;
    },

    //Mobile
    setProcessor(state, action) {
      state.processor = action.payload;
    },
    setCamera(state, action) {
      state.camera = action.payload;
    },
    setMobileRAM(state, action) {
      state.mobileRAM = action.payload;
    },
    setBatteryCapacity(state, action) {
      state.batteryCapacity = action.payload;
    },
    setStorage(state, action) {
      state.storage = action.payload;
    },
    setSelectedStorage(state, action) {
      state.selectedStorage = action.payload;
    },

    //All products
    setName(state, action) {
      state.name = action.payload;
    },
    setBrand(state, action) {
      state.brand = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    setDiscount(state, action) {
      state.discount = action.payload;
    },
    setStock(state, action) {
      state.stock = action.payload;
    },
    setTags(state, action) {
      state.tags = action.payload;
    },
    setImages(state, action) {
      state.imageUrls = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {
  setSizes,
  setColors,
  setName,
  setBrand,
  setDescription,
  setPrice,
  setDiscount,
  setStock,
  setTags,
  setCPU,
  setSelectedCPU,
  setGPU,
  setSelectedGPU,
  setHardDrive,
  setSelectedHardDrive,
  setScreenSize,
  setSelectedScreenSize,
  setRAM,
  setSelectedRAM,
  setProcessor,
  setCamera,
  setMobileRAM,
  setBatteryCapacity,
  setStorage,
  setSelectedStorage,
  setImages,
  createNewProduct,
} = productSlice.actions;

export default productSlice.reducer;
