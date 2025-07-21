import isEqual from 'lodash/isEqual';

export const apiResponseSuccess = (status?: number) => {
  return status && status >= 200 && status <= 300;
};

export const isEmptyOrSpaces = (str?: string) => {
  return (
    str === null ||
    str === undefined ||
    (typeof str === 'string' && str.match(/^ *$/) !== null)
  );
};

export const generateArrayNum = (start: number, end: number) => {
  const result = [];
  for (let index = start; index <= end; index++) {
    result.push(index);
  }
  return result;
};

export const stringIsJSON = (str = '') => {
  try {
    JSON.parse(str);
  } catch (e) {
    console.log(e);
    return false;
  }
  return true;
};

export const prevPath = (url: string) => {
  if (isEmptyOrSpaces(url)) return null;

  const splittedUrl = url?.split('/');

  splittedUrl?.pop();

  return splittedUrl?.join('/');
};

export const dataURLtoFile = (dataurl: string, filename: string) => {
  const arr = dataurl.split(',');
  const mime = arr?.[0]?.match?.(/:(.*?);/)?.[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;

  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};

export const mobileCheck = () => {
  let check = false;
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      navigator.userAgent || navigator.vendor
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      (navigator.userAgent || navigator.vendor).substr(0, 4)
    )
  )
    check = true;

  return check;
};

export const createImage = (url: any) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
  });

export function getRadianAngle(degreeValue: any) {
  return (degreeValue * Math.PI) / 180;
}

/**
 * Returns the new bounding area of a rotated rectangle.
 */
export function rotateSize(width: any, height: any, rotation: any) {
  const rotRad = getRadianAngle(rotation);

  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  };
}

export async function getCroppedImg(
  imageSrc: any,
  pixelCrop: any,
  file: any,
  rotation = 0,
  flip = { horizontal: false, vertical: false }
) {
  const image: any = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return null;
  }

  const rotRad = getRadianAngle(rotation);

  // calculate bounding box of the rotated image
  const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
    image.width,
    image.height,
    rotation
  );

  // set canvas size to match the bounding box
  canvas.width = bBoxWidth;
  canvas.height = bBoxHeight;

  // translate canvas context to a central location to allow rotating and flipping around the center
  ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
  ctx.rotate(rotRad);
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
  ctx.translate(-image.width / 2, -image.height / 2);

  // draw rotated image
  ctx.drawImage(image, 0, 0);

  // croppedAreaPixels values are bounding box relative
  // extract the cropped image using these values
  const data = ctx.getImageData(
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height
  );

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // paste generated rotate image at the top left corner
  ctx.putImageData(data, 0, 0);

  // As Base64 string
  // return canvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve) => {
    canvas.toBlob((file: any) => {
      resolve(URL.createObjectURL(file));
    }, file?.type);
  });
}

export const desctructLinks = (data: any[]) => {
  const newData = data?.map((item: any) => {
    let typeLink = '';
    let labelLink = '';
    let uriLink = '';
    switch (item?.__component) {
      case 'workdoc.link2-inv':
        labelLink = 'Invoice';
        typeLink = 'invoice';
        uriLink = 'invoices';
        break;
      case 'workdoc.link2-quotation':
        labelLink = 'Quotation';
        typeLink = 'quotation';
        uriLink = 'quotations';
        break;
      case 'workdoc.link2-po':
        labelLink = 'Purchase Order';
        typeLink = 'purchaseOrder';
        uriLink = 'purchase-orders';
        break;
      case 'workdoc.link2-do':
        labelLink = 'Delivery Order';
        typeLink = 'deliveryOrder';
        uriLink = 'delivery-orders';
        break;
      default:
        break;
    }
    return {
      label: labelLink,
      type: typeLink,
      uri: uriLink,
      value: item?.[typeLink]?.id,
      __component: item?.__component,
    };
  });
  return newData;
};

export const filterPayload = (
  data: Record<string, any>
): Record<string, any> => {
  // If `data` key exists, filter only inside `data`
  if (data?.data && typeof data.data === 'object') {
    return { data: filterPayload(data.data) };
  }

  return Object.fromEntries(
    Object.entries(data)
      .map(([key, value]) => {
        if (value === null || value === undefined) return null; // Remove null/undefined
        if (typeof value === 'string' && value.trim() === '') return null; // Remove empty strings

        if (Array.isArray(value)) {
          // Filter null/undefined and recursively filter object elements
          const filteredArray = value
            .map((item) =>
              typeof item === 'object' && item !== null
                ? filterPayload(item)
                : item
            )
            .filter((item) => item !== null && item !== undefined);

          return filteredArray.length > 0 ? [key, filteredArray] : null; // Keep only non-empty arrays
        }

        if (typeof value === 'object' && value !== null) {
          const filteredObject = filterPayload(value);
          return Object.keys(filteredObject).length > 0
            ? [key, filteredObject]
            : null;
        }

        return [key, value]; // Keep valid values
      })
      .filter((entry): entry is [string, any] => entry !== null) // ✅ Ensure valid tuples
  );
};

export const getUpdatedFields = (
  existingData: Record<string, any>,
  newData: Record<string, any>
) => {
  return Object.fromEntries(
    Object.entries(newData).filter(([key, value]) => {
      const prevValue = existingData?.[key];

      // Deep compare objects and arrays
      const isChanged = !isEqual(prevValue, value);
      return isChanged;
    })
  );
};

export const populateEmailBodyParams = (
  emailBody: string,
  data: Record<string, any>
): string => {
  return emailBody.replace(/#{(.*?)}/g, (_, key) => {
    return getNestedValue(data, key);
  });
};

export const emailBodyStripWrapper = (html: any) => {
  return html
    .replace(/^<div class="raw-html-embed">/, '')
    .replace(/<\/div>\s*$/, '')
    .trim();
};
function getNestedValue(obj: Record<string, any>, path: string): string {
  if (path.includes('[]')) {
    // Handle arrays
    const [arrayPath, ...rest] = path.split('[]');
    const array = arrayPath
      .split('.')
      .reduce((acc: any, part: string) => acc?.[part], obj);
    const fieldPath = rest.join('').slice(1); // remove the first dot
    if (Array.isArray(array)) {
      return array.length > 0
        ? array
            .map((item: Record<string, any>) => getNestedValue(item, fieldPath))
            .join(', ')
        : '-';
    } else {
      return '-';
    }
  } else {
    // Normal case
    return (
      path.split('.').reduce((acc: any, part: string) => acc?.[part], obj) ??
      '-'
    );
  }
}

export function sanitizeHtmlForEmail(html: string) {
  const div = document.createElement('div');
  div.innerHTML = html;

  const figures = div.querySelectorAll('figure.image');
  figures.forEach((figure) => {
    const img = figure.querySelector('img');
    if (img) {
      const width = img.getAttribute('width');
      const height = img.getAttribute('height');

      // Create new img with style inline
      img.style.width = width ? `${width}px` : '100%';
      img.style.height = height ? 'auto' : 'auto';

      // Replace figure with img directly
      figure.replaceWith(img);
    }
  });

  // Strip colgroup/figure/table-class-based layouts if needed
  return div.innerHTML;
}
